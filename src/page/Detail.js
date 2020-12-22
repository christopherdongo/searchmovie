import React, { useEffect, useState } from "react";
import { MovieInfoAPI } from "../api/api";
import { useParams, useHistory} from "react-router-dom";
import Nav from '../components/Nav'
import Star from "../icons/Star";
import Spinner from "../components/Spinner";
import 'animate.css'
import "../css/index.css";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  useEffect(() => {
    MovieInfoAPI(id)
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

    setTimeout(()=>{
        setLoading(true)
    },2000)
  
  const HOme=()=>{
    history.push('/')
  }

  return (
    <>
    <Nav />
    <div className="container Details">
      {loading? (
        <>
          <div className="row section `{loading? animate__slideInRight : '' }`" >
            <div className="col-12 d-flex align-items-center col-lg-6 col-md-6 col-sm-12">
              <img
                src={data.Poster}
                className="img-block img-fluid imagen"
                alt="imagen de pelicula"
              />
            </div>

            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <h1 className="title text-center">
                {data.Title} ({data.Year})
              </h1>

              <p className="description"> {data.Plot} </p>

              <dl className="info_movie">
                <dt>Actores</dt>
                <dd>{data.Actors}</dd>

                <dt>Escore</dt>
                <dd>{data.Metascore}</dd>

                <dt>Pais</dt>
                <dd>{data.Country}</dd>

                <dt>Duracion</dt>
                <dd>{data.Runtime}</dd>

                <dt>Language</dt>
                <dd>{data.Language}</dd>

                <dt>Writer</dt>
                <dd>{data.Writer}</dd>

                <dt>Year</dt>
                <dd>{data.Year}</dd>

                <dt>Genre</dt>
                <dd>{data.Genre}</dd>

                <dt>Runtime</dt>
                <dd>{data.Runtime}</dd>

                <dt>Ratings</dt>
                <dd>
                  {data.imdbRating} <Star className="star" />
                </dd>
              </dl>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-12 d-flex col-lg-12 col-md-12 col-sm-12 justify-content-center align-items-center">
              <button type="button" className="btn btn-outline-light" onClick={HOme}>
                Home
              </button>
            </div>
          </div>
        </>
      ) : (
          <Spinner />
      )}

    </div>
    </>
  );
};

export default Details;
