import { useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const [text, setText] = useState();
    const [message, setMessage] = useState("Api'a istek atılıyor...");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const fetchData = async () => {
        try {
            const response = await axios("http://localhost:4000/");
            setMessage(response.data.message);
        }
        catch (error) {
            setMessage("İstek başarısız oldu.")
        }
    }

    useEffect(() => {
        fetchData();
    }, [text]);

    return (
        <div>
            <Button
                onClick={() => navigate("/")}
                label={"Home Sayfasına Dön"}
            />
            <h1>
                About Sayfası
            </h1>
            <Button color={"black"} label={"Test butonu"} size={50}/>
            <Input
                value={text}
                placeholder={"Bir şeyler yazın..."}
                onChange={handleChange}
            />
            <p>
                Yazılan metin: {text}
            </p>
            <p>
                API'den gelen cevap: {message}
            </p>
        </div>
    );
};

export default About;
