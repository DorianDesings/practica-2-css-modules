import { v4 } from 'uuid';

export const CARDS = [
	{
		id: v4(),
		title: 'Team Builder',
		text: 'Scans our talent network to create the optimal team for your project',
		icon: '/images/icon-team-builder.svg',
		color: 'red'
	},
	{
		id: v4(),
		title: 'Supervisor',
		text: 'Monitors activity to identify project roadblocks',
		icon: '/images/icon-supervisor.svg',
		color: 'cyan'
	},
	{
		id: v4(),
		title: 'Karma',
		text: 'Regularly evaluates our talent to ensure quality',
		icon: '/images/icon-karma.svg',
		color: 'orange'
	},
	{
		id: v4(),
		title: 'Calculator',
		text: 'Uses data from past projects to provide better delivery estimates',
		icon: '/images/icon-calculator.svg',
		color: 'blue'
	}
];
