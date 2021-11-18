import Form from './Form';


const Contact = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row"><h2>Contact</h2></div>
        <div className="row">
          <div className="col-12 col-md-6 -mb-3"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2783.0285557941957!2d4.804718356346572!3d45.770617963086586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4170493513eaa9f!2sCCI%20Formation!5e0!3m2!1sfr!2sfr!4v1636543422881!5m2!1sfr!2sfr" width="100%" height="450"></iframe></div>
          <div className="col-12 col-md-6 -mb-3"><br/>Lorem ipsum dolor sit amet</div>
        </div>
        <br/><br/>
        <Form />

      </div>
          </section>
  );
}
export default Contact