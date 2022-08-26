import { useNavigate } from "react-router-dom";
import { FaPlayCircle, FaStar } from "react-icons/fa";
import { useContext } from "react";
import { ContainerInfo, MiniAvatar, ButtonBuy } from "../styled.components";
import Blackwidow from "../../assets/black-widow.png";
import { Context } from '../../context/AppContext';

const Info = () => {

    const history = useNavigate();
    const { state } = useContext(Context);
    const goToDetails = (): void => {
        history('/detail/2')
    }

    return(
        <>
            <ContainerInfo height={52}>
                <section className="icon-info">
                    <FaPlayCircle size={25} color={'red'}/>
                </section>
                <section className="title-info">
                    { state.name }
                </section>
                <section className="details-info">
                    <section className="list-info">
                        <div>2020</div>
                        <div>Fantastic</div>
                        <div>2h 35min</div>
                    </section>
                </section>
                <section className="star">
                    <FaStar color="orange"/>
                    <FaStar color="orange"/>
                    <FaStar color="orange"/>
                    <FaStar color="orange"/>
                    <FaStar color="orange"/>
                </section>
                <section className="description-info">
                    <div className="description-title-info">Plot Sumary</div>
                    <div className="description-text-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Magnam atque alias quae nihil itaque mollitia incidunt tempora
                         quas cumque! Beatae ab voluptas provident, neque nam quo 
                         velit aliquid iste blanditiis.</div>
                </section>
                <section className="description-info">
                    <div className="description-title-info">Cast</div>
                    <div className="images">
                        { [1, 2, 3, 4].map(item =>
                            <>
                             <MiniAvatar key={item} src={Blackwidow} />
                             <div>Hola</div>
                             </>
                             ) }
                    </div>
                </section>
                <section className="button-buy">
                <ButtonBuy onClick={goToDetails}> Comprar </ButtonBuy>
                </section>
            </ContainerInfo>
        </>
    );
};

export default Info;