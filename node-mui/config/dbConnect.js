import { connect } from "mongoose";

const DBconnect = () => {

    connect(process.env.MONGODB_URL)
        .then((data) => {
            console.log("db connection  succesful ");
            // console.log(`Mongodb connected with server: ${data.connection.host}`);
            // console.log(`db connected : ${data.connection.name}`);
        }).catch((err) => {
            console.log(err);
        });
}

export default DBconnect;