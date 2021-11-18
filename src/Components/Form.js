const Form =() =>{
  return (
    <section>
<div className="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div className="form-floating">
  <input type="comment" class="form-control" id="floatingComment" placeholder="Comment"/>
  <label for="floatingComment">Comment</label>
</div>
</section>
);
}

export default Form