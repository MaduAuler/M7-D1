import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Card, Button} from 'react-bootstrap'
import {MdOutlineAddCircle } from "react-icons/md";
import { GiHeartPlus, GiHearts } from "react-icons/gi";
import { connect } from 'react-redux'
import { addToFavoritesAction, getResultsAction } from '../redux/actions';
import jobs from '../../src/jobs.jpg'


const mapStateToProps = (state) => ({
  result: state.results.stock,
  favorites: state.favorites.companys
  })
  
  const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (company) => {
      dispatch(addToFavoritesAction(company))
    },
    getResults: (search) => {
      dispatch(getResultsAction(search))

    },
  })
  
const Home = (props) => {
    const [inputValue, setInputValue] = useState("")
  
    const handleInput =(event) =>{
        setInputValue(event.target.value)
    }
    
    const handleSubmit =(event) =>{
       event.preventDefault()
       props.getResults(inputValue)
    } 

    return(
        <Container  className='mt-5 p-4'>
        
        <div className=' mb-5'> <Link to="/favorites"> <Button style={{backgroundColor: '#f6b3b5'}}>Favorites <GiHearts/></Button> </Link></div>
      
            <img src={jobs} style={{height:'30vh'}} className='mb-5'/>
            <form onSubmit={handleSubmit}>
            <input placeholder="Search..." value = {inputValue} onChange={handleInput} className='mb-5'/>
            </form>
           
            <Row>
           {props.result.data && props.result.data.map((job)=>(
              <Col>
               <Card style={{height: '250px', width: '250px'}} className='mb-5'>
               <Card.Header style={{backgroundColor: '#f6b3b5'}}>
                 {job.category}
               {props.favorites.includes(job.company_name)?  <button className='ml-2 buttonClicked'> <GiHearts style={{color:'#f6b3b5'}}/></button> : 
               <button className='ml-2 button' onClick={() => { props.addToFavorites(job.company_name) }}><GiHeartPlus /> </button>}
              
                </Card.Header>
               <Card.Body>
                 <Card.Title>{job.title}</Card.Title>
                 <Link to={`/${job.company_name}`}>{job.company_name}</Link>
               </Card.Body>
             </Card>
             </Col>
           )).slice(0,8)}
          
</Row>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)