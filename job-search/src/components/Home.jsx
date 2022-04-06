import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Card} from 'react-bootstrap'
import { MdFavoriteBorder } from "react-icons/md";
import { connect } from 'react-redux'
import { addToFavoritesAction } from '../redux/actions';



const mapStateToProps = (state) => ({
 
  })
  
  const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (company) => {
      dispatch(addToFavoritesAction(company))
    },
  })
  

const Home = (props) => {
    const [jobs, setJobs] = useState([])
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        getJobs()
    }, [])


    const getJobs = async (search) =>{
        if(search){
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`)
            const data = await response.json()
            setJobs(data.data)
        }else{
            const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=10')
            const data = await response.json()
            setJobs(data.data)
        }

    }
    
    const handleInput =(event) =>{
        setInputValue(event.target.value)
    }
    
    const handleSubmit =(event) =>{
       event.preventDefault()
       getJobs(inputValue)
    } 
    
    return(
        <Container style={{backgroundColor:'#F8F8F8'}} className='mt-5 p-4'>
         <Link to="/favorites"> <button>Favorites <MdFavoriteBorder/></button> </Link>
            <h1 className='mt-5'>Job Search</h1> 
            <form onSubmit={handleSubmit}>
            <input placeholder="Search..." value = {inputValue} onChange={handleInput} className='mb-5'/>
            </form>
           
            <Row>
           {jobs.map((job)=>(
              <Col>
               <Card style={{height: '250px', width: '250px'}} className='mb-5'>
               <Card.Header>{job.category} /<button     onClick={() => {
                      props.addToFavorites(job)
                    }}><MdFavoriteBorder/> Like Company</button></Card.Header>
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