interface Props {
	id: number | undefined;
	code?: number | undefined;
	countryCode?: number | undefined;
	isoCode?: string | undefined;

}

export const Tags = ({id, code, isoCode, countryCode}: Props) => {
	const title = isoCode !== undefined ? 'Codigo ISO' : 'Codigo';

	return (
		<div className="flex gap-3 mt-3">
			<span className="p-1 text-sm text-white rounded-3xl bg-cyan-400">
				id: {id}
			</span>
			<span className="p-1 text-sm text-white bg-red-400 rounded-3xl">
				Codigo: {code}
			</span>
			<span className="p-1 text-sm text-white bg-green-400 rounded-3xl">
				{title}: <strong>{isoCode || countryCode}</strong>
			</span>
		</div>
	);
};
