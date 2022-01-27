import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
const displayCard = (props) => (
	<Card style={{ width: '18rem' }}>
		<Card.Img variant='top' src='#' />
		<Card.Body>
			<Card.Title>{props.name}</Card.Title>
			<Card.Text>{props.description}</Card.Text>
		</Card.Body>
		<ListGroup className='list-group-flush'>
			<ListGroupItem>Price: {props.price}</ListGroupItem>
			<ListGroupItem>Inventory Count: {props.inventoryCount}</ListGroupItem>
		</ListGroup>
	</Card>
);

export default displayCard
