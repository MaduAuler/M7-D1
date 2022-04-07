import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Card, Button} from 'react-bootstrap'
import { MdFavoriteBorder } from "react-icons/md";
import { connect } from 'react-redux'
import { addToFavoritesAction, getResultsAction } from '../redux/actions';


const mapStateToProps = (state) => ({
  result: state.results.stock,
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
        <Container style={{backgroundColor:'#F8F8F8'}} className='mt-5 p-4'>
         <Link to="/favorites"> <Button variant="secondary">Favorites <MdFavoriteBorder/></Button> </Link>
            <h1 className='mt-5'>Job Search</h1> 
            <form onSubmit={handleSubmit}>
            <input placeholder="Search..." value = {inputValue} onChange={handleInput} className='mb-5'/>
            </form>
           
            <Row>
           {props.result.data && props.result.data.map((job)=>(
              <Col>
               <Card style={{height: '250px', width: '250px'}} className='mb-5'>
               <Card.Header>{job.category} <Button variant="secondary" size="lg" active
                onClick={() => { props.addToFavorites(job.company_name) }}><MdFavoriteBorder/> Like Company</Button>
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