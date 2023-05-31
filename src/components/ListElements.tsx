import {Link} from 'react-router-dom';
import {District, Municipality, Province} from '../types';

interface Props {
	title: string;
	element: Province[] | Municipality[] | District[] | undefined;
	href: string;
}

export const ListElements = ({title, element, href}: Props) => {
	return (
		<div className="p-5 my-5 transition-shadow duration-300 ease-in-out border shadow-sm md:grid-cols-3 rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
			<h3 className="font-semibold">{title}</h3>
			<ol className="grid md:grid-cols-2">
				{element?.map(({id, nombre}) => (
					<li key={id}>
						<Link to={`${href}/${id}`}>{nombre}</Link>
					</li>
				))}
			</ol>
		</div>
	);
};
