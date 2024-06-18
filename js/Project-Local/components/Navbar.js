
const navbar=(login="login",signup="signup")=>{

    return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Javscript</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="/Project-Local/index.html"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Project-Local/pages/Product.html"
            >product</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Project-Local/pages/addProduct.html"
            >Add product</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Project-Local/pages/cart.html">cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Project-Local/pages/Login.html">${login}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Project-Local/pages/Signup.html">${signup}</a>
        </li>
      </ul>
      <form class="d-flex" role="search" id="searching">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="searchValue"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`
}



export default navbar