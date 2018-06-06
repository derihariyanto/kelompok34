import React from 'react';
import './jadwal.css';


class Jadwal extends React.Component{

    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        fetch('https://api.myjson.com/bins/jzt4a')
        .then(res => res.json())
        .then(res => {
            console.log(res[0].NIM);
            
            this.setState({
                data: res   
            })
        })
        .catch(error => {
            console.error(error);
            
        })
    }

    render(){
        return(
            <div className="container contJadPre">
            <i className="far fa-clock"></i>
                <h3>Jadwal Dokter</h3>
               <div className="container jadwalPre">
                  <table className="table table-striped table-hover e">
                    <thead>
                      <tr>
                        <th className="tbHeaderColor " scope="col" rowSpan="2">
                        <div className="d-flex align-items-center justify-content-center"> 
                            <p className="fix">No</p>
                        </div>
                        </th>
                        <th className="tbHeaderColor vercenter" scope="col" rowSpan="2">
                            <div className="d-flex align-items-center justify-content-center"> 
                            <p>Nama</p>
                        </div>
                        </th>
                        <th className="tbHeaderColor vercenter" scope="col" rowSpan="2">
                        <div className="d-flex align-items-center justify-content-center"> 
                            <p>Spesialis</p>
                        </div>
                        </th>
                        <th className="tbHeaderColor" scope="col" colSpan="6">Waktu Praktek</th>
                      </tr>
                      <tr>
                      <th className="tbHeaderColor" scope="col">Senin</th>
                        <th className="tbHeaderColor" scope="col">Selasa</th>
                        <th className="tbHeaderColor" scope="col">Rabu</th>
                        <th className="tbHeaderColor" scope="col">Kamis</th>
                        <th className="tbHeaderColor" scope="col">Jum'at</th>
                        <th className="tbHeaderColor" scope="col">Sabtu</th>
                      </tr>
                    </thead>

                        <tbody>
                                {this.state.data.map(function(i){
                                    return(
                                            <tr key={i.no}>
                                                <th scope="row">{i.No}</th>   
                                                <td>{i.Dokter}</td>   
                                                <td>{i.Spesialis}</td>
                                                <td>{i.Senin}</td>
                                                <td>{i.Selasa}</td>
                                                <td>{i.Rabu}</td>
                                                <td>{i.Kamis}</td>
                                                <td >{i.Jumat}</td>
                                                <td >{i.Sabtu}</td>

                                            </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>  
            </div>
        );
    }
}

export default Jadwal;