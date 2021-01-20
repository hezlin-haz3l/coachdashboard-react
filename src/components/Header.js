export default function Header() {
    return (
        <div>            
            <nav class="navbar navbar-expand-lg navbar-dark" style={styles.bgMain}>
        <div class="container">
          <a class="navbar-brand" href="#">My Coach2U</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">My Coach</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">My Client</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">My Gym</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Add Content
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#addCoachModal">Add Coach</a>
              <a class="dropdown-item" href="#">Add Gym</a>
              <a class="dropdown-item" href="#">Add Client</a>
          </div>
      </li>
  </ul>
</div>
</div>
</nav>
<header class="py-5 text-light bg-dark">
    <div class="container">
        <h1><i class="fas fa-cogs"></i> MyCoach2U</h1>
    </div>
</header>
        </div>
    )
}

const styles = {
    bgMain : {
        backgroundColor: 'rgb(220,60,50)'
    }
}