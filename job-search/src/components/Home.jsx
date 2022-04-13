import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Card, Button} from 'react-bootstrap'
import { GiHeartPlus, GiHearts } from "react-icons/gi";
import { addToFavoritesAction, getResultsAction } from '../redux/actions';
import jobs from '../../src/jobs.jpg'
import { useSelector, useDispatch } from 'react-redux'

  
const Home = () => {
    const [inputValue, setInputValue] = useState("")

    const favorites = useSelector((state) => state.favorites.companys)
    const result = useSelector((state) => state.results.stock)
    const dispatch = useDispatch()
  
    const handleInput =(event) =>{
        setInputValue(event.target.value)
    }
    
    const handleSubmit =(event) =>{
       event.preventDefault()
       dispatch(getResultsAction(inputValue))
    } 

    return(
        <Container  className='mt-5 p-4'>
        
        <div className=' mb-5'> <Link to="/favorites"> <Button style={{backgroundColor: '#f6b3b5'}}>Favorites <GiHearts/></Button> </Link></div>
      
            <img src={jobs} style={{height:'30vh'}} className='mb-5' alt='jobs'/>
            <form onSubmit={handleSubmit}>
            <input placeholder="Search..." value = {inputValue} onChange={handleInput} className='mb-5'/>
            </form>
           
            <Row>
           {result.data && result.data.map((job)=>(
              <Col>
               <Card style={{height: '250px', width: '250px'}} className='mb-5'>
               <Card.Header style={{backgroundColor: '#f6b3b5'}}>
                 {job.category}
               {favorites.includes(job.company_name)?  <button className='ml-2 buttonClicked'> <GiHearts style={{color:'#f6b3b5'}}/></button> : 
               <button className='ml-2 button' onClick={() => { dispatch(addToFavoritesAction(job.company_name)) }}><GiHeartPlus /> </button>}
              
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

export default Home