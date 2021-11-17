import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
	let nav = useNavigate();
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [content, setContent] = useState<string>('')

	const handleSubmit = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, content, email })
		};
		fetch('/api/chirps', requestOptions)
			.then(response => response.json())

		goHome()
	}

	function goHome() {
		nav("/");
	}
	return (
		<div className="col-12 justify-content-center">
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
			<button onClick={() => handleSubmit()}>Post chirp</button>
		</div>
	)
}

interface ComposeProps { }

export default Compose;