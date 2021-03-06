import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import image from '../../../img/Placeholder.jpg'

const displayCard = (item) => (
	<Card style={{ width: '18rem' }}>
		<Card.Img variant='top' src={image} />
		
		<Card.Body>
			<Card.Title>{item.item.name}</Card.Title>
			<Card.Text>{item.item.description}</Card.Text>
		</Card.Body>
		<ListGroup className='list-group-flush'>
			<ListGroupItem>Price: {item.item.price}</ListGroupItem>
			<ListGroupItem>Inventory Count: {item.item.inventoryCount}</ListGroupItem>
		</ListGroup>
	</Card>
);

export default displayCard;
