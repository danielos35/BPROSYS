const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config({ path: './config.env' });

const pool =  mysql.createPool({
    host       : process.env.HOST, 
    user       : process.env.USER,
    password   : process.env.PASSWORD, 
    database   : process.env.DATABASE
})


const all_data = `SELECT * FROM cliente, pagos WHERE cliente.cedula = pagos.cedula ORDER BY fecha DESC`;

const filter_data = (query) => {
    return `SELECT * FROM cliente, pagos 
    WHERE cliente.cedula = '${query}' 
    AND pagos.cedula = '${query}'
    ORDER BY fecha DESC`
}


exports.getDataBprosys = (req, res, next) => {

    const query_sql = ['null', ''].includes(req.query.cedula) ? all_data : filter_data(req.query.cedula);
    pool.getConnection( (err, connection) => {
        if(err) throw err;
        connection
            .query(query_sql, (err, rows)  => {
                connection.release();
                    if(!err){
                        if(rows.length > 0) res.send({data:rows, status:'success'}).status(200);
                        if(rows.length === 0) res.send({data:rows, status:'Not found'}).status(404);
                    } else {
                        res.send({data:[], status:'Error'}).status(400);
                        next();
                    }
        })
    })
}
