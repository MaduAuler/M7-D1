import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Card} from 'react-bootstrap'

const Home = () => {
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
         
            <h1 className='mt-5'>Job Search</h1>
            <form onSubmit={handleSubmit}>
            <input placeholder="Search..." value = {inputValue} onChange={handleInput} className='mb-5'/>
            </form>
           
            <Row>
           {jobs.map((job)=>(
              <Col>
               <Card style={{height: '200px', width: '250px'}} className='mb-5'>
               <Card.Header>{job.category}</Card.Header>
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