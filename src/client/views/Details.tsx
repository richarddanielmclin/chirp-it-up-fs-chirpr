import * as React from 'react';
import { useParams } from 'react-router-dom';
import type { IChirp } from '../utils/types'

const Details: React.FC<DetailsProps> = () => {

    const { chirpid } = useParams();

    const [chirp, setChirp] = React.useState<IChirp>({});

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/chirps/${chirpid}`)
            const chirp = await res.json();
            setChirp(chirp)
        }
        )();
    }, [])

    return (
        <main className="container">
            <section className="row my-2 justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                @{chirp.name}
                            </h4>
                            <p className="card-text">
                                {chirp.content}
                            </p>
                        </div>
                        <div className="card-footer">
                            <span className="text-muted">{chirp.id}</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

interface DetailsProps { }

export default Details;