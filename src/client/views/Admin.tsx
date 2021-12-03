import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { IChirp } from '../utils/types'

const Admin: React.FC<AdminProps> = () => {

    let nav = useNavigate();
    const { id } = useParams();
    const [chirp, setChirp] = useState<IChirp>({ id: id, name: "", content: "" });
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setChirp(chirp);
        })();
    }, []);

    const handlePut = async (id: string, name: string, content: string) => {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, content: content }),
        };
        fetch(`/api/chirps/${id}`, requestOptions).then((response) => response.json());
        goHome()
    };

    const handleDelete = () => {
        const requestOptions = {
            method: "DELETE"
        };
        fetch(`/api/chirps/${id}`, requestOptions).then((response) => response.json());
        goHome()
    };

    function goHome() {
        nav("/");
    }

    return (
        <>
            <div className="col-12 d-flex text-center justify-content-center">
                <div className="row-12">
                    <input type="text" placeholder={chirp.name} value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder={chirp.content} value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="row-12">
                    <button onClick={() => handlePut(chirp.id, chirp.name, chirp.content)} className="btn btn-">Update chirp</button>
                    <button onClick={() => handleDelete()}>Delete chirp</button>
                </div>
            </div>
        </>
    );
}

interface AdminProps { }

export default Admin