'use strict';

const conexion = require('../config/database');

let Alumno = function (alumno) {
    this.NumControl = alumno.Num_Control;
    this.Nombre = alumno.Nombre;
    this.Primer_Ap = alumno.Primer_Ap;
    this.Segundo_Ap = alumno.Segundo_Ap;
    this.FechaNac = alumno.FechaNac;
    this.Semestre = alumno.Semestre;
    this.Carrera = alumno.Carrera;
};

// ======= Logica para BD Relacional =====
// --- ALTAS ----
Alumno.create = function (alumno, result) {
    conexion.query("INSERT INTO alumnos SET ?", alumno, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// ----- BAJAS -----
Alumno.delete = function (nc, result) {
    conexion.query("DELETE FROM alumnos WHERE NumControl = ?", [nc], function (err, res) {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

//----- CAMBIOS 
Alumno.update = function (alumno, result) {

    console.log("---------->", alumno);


    conexion.query("UPDATE alumnos SET Nombre=?, Primer_ap=?, Segundo_ap=?, FechaNac=?, Semestre=?, Carrera=? WHERE NumControl=?",
        [alumno.Nombre, alumno.Primer_Ap, alumno.Segundo_Ap, alumno.Fecha_Nac,
        alumno.Semestre, alumno.Carrera, alumno.NumControl], function (err, res) {
            if (err) {
                console.log('Error: ', err);
                result(null, err);
            } else {
                console.log(res);
                result(null, res);
            }
        });
};

//----- CONSULTAS -----
Alumno.findById = function (nc, result) {
    conexion.query("SELECT * FROM alumnos WHERE NumControl=?", nc, function (err, res) {
        if (err) {
            console.log('Error: ', err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Alumno.findAll = function (result) {
    conexion.query("SELECT * FROM alumnos", function (err, res) {
        if (err) {
            console.log('Error: ', err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = Alumno;