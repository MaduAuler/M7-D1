import { connect } from "react-redux"
import {Card, Col, Row, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"

const mapStateToProps = (state) =>({
    favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  
  })

const Favorites = ({favorites}) => {
    console.log(favorites)
    console.log(favorites.companys)
   
    return(
        <Container style={{backgroundColor:'#F8F8F8'}} className= 'mt-5 p-5'>
            <h1 className='mt-5 mb-5' >Favorites</h1>
        <Row>
           
        { favorites && favorites.companys.map((company)=>(
                <Col>
           
                <Card style={{height:'100px', weight: '100px'}} className='mb-5'>
                   <Link to={`/${company.company_name}`}> <Card.Body>{company.company_name}</Card.Body></Link>
                  </Card>
                    </Col>
        ))}
        </Row>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)