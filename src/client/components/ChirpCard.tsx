import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import type { IChirp } from '../utils/types';

const ChirpCard: React.FC<ChirpCardProps> = ({ chirp }) => {
    const nav = useNavigate();
    const handleDetailsClick = () => nav(`/details/${chirp.id}`);
    const handleAdminClick = () => nav(`/admin/${chirp.id}`);

    return (
        <li className="list-group-item">
            <h4>@{chirp.name}</h4>
            <p className="my-4">{chirp.content}</p>
            <button className="btn btn-default btn-info" onClick={handleDetailsClick}>Details</button>
            <button className="btn btn-default btn-info" onClick={handleAdminClick}>Admin</button>
            <hr />
            <small className='text-muted'>#{chirp.id} // {chirp._created}</small>
        </li>
    );
}

interface ChirpCardProps {
    chirp: IChirp
}

export default ChirpCard;