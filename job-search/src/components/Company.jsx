import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Container, Row, Col, Card} from 'react-bootstrap'

const Company = () => {
    const {company} = useParams()
    const [jobs, setJobs] = useState([])
   
    useEffect(()=> {
        getJobs()
    }, [])

    const getJobs = async () =>{
        const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${company}`)
        const data = await response.json()
        setJobs(data.data)
        console.log(data.data)
    }

    return(
        <Container style={{backgroundColor:'#f6b3b5'}} className= 'mt-5 p-5'>
            <h1 className='mt-5 mb-5'>Company {company}</h1>
            <Row>
           {jobs.map((job) =>(
               <Col>
           
           <Card >
               <Card.Header>{job.category}</Card.Header>
               <Card.Body>
                 <Card.Title>{job.title}</Card.Title>
               </Card.Body>
             </Card>
               </Col>
           ))}
           </Row>
        </Container>
    )
}

export default Company