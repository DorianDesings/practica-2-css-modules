import Card from './components/card/Card';
import { CARDS } from './constants/cards';

const App = () => {
	return (
		<>
			{CARDS.map(card => (
				<Card key={card.id} {...card} />
			))}
		</>
	);
};

export default App;
