import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                Home Sayfası
            </h1>
            <Button
                onClick={() => navigate("/about")}
                label={"About Sayfasına Git"}
            />
        </div>
    )
};

export default Home;
