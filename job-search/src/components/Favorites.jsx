import { connect } from "react-redux"
import {Card, Col, Row, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { removeAction } from '../redux/actions'
import { GiHeartMinus} from "react-icons/gi";

const mapStateToProps = (state) =>({
    favorites: state.favorites.companys
})

const mapDispatchToProps = (dispatch) => ({
    removeCompany: (index) => {
        dispatch(removeAction(index))
      }
  })

const Favorites = (props) => {
 
   
    return(
        <Container style={{backgroundColor:'#f6b3b5'}} className= 'mt-5 p-5'>
            <h1 className='mt-5 mb-5' >Favorites</h1>
        <Row>
           
        {props.favorites && props.favorites.map((company, index)=>(
                <Col>
           
                <Card style={{height:'100px', weight: '100px'}} className='mb-5'>
                   <Link to={`/${company}`}> <Card.Body>{company}</Card.Body></Link>
                   <button style={{border:'none', decoration:'none', backgroundColor:'#F8F8F8', fontSize:'1.5rem'}} onClick={() => {props.removeCompany(index)}}><GiHeartMinus/></button>
                  </Card>
                    </Col>
        ))}
        </Row>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)