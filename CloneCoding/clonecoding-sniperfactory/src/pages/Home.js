import Footer from "../components/Footer";
import metrics from "../data/metrics.json";

function Home() {

    return (
        <>
            <section className="hero">
                <h1>SniperFactory 클론에 오신 것을 환영합니다!</h1>
                <p>IT 교육, 실전 프로젝트, 취업 연계까지</p>
            </section>

            <section className="metrics">
                {metrics.map((item) => (
                    <div key={item.id} className="metrics-card">
                        <h2>{item.value}</h2>
                        <p>{item.label}</p>
                    </div>
                ))}
            </section>
            <Footer/>
        </>
    );
}

export default Home;