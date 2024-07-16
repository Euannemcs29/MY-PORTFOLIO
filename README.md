<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal Portfolio</title>
  <link rel="stylesheet" href="MY PORTFOLIO.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#social">Social</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Home Section -->
    <section id="home" class="section active">
      <div class="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Hello, I'm Yohan.</p>
        <a href="#portfolio" class="cta">View My Work</a>
      </div>
    </section>

 <!-- About Section -->
 <section id="about" class="section active">
    <div class="about-container">
      <img src="profile pic.jpg" alt="Profile Picture">
      <div class="about-content">
        <h2>About Me</h2>
          <p>Hi, I'm Euanne Miles. A first year student currently studying in FEU Institute of Technology taking the course of BSIT-AGD with a passion for gaming. I do enjoy my course in a sense that I get to learn the process of making a virtual reality out of it.</p>
          <div class="skills">
            <h3>Information:</h3>
            <ul>
              <li>Nickname: Yohan </li>
              <li>Age: 19 </li>
              <li>Birthday: May 29, 2005</li>
            </ul>
          </div>
          <div class="Likes">
            <h3>Likes:</h3>
            <ul>
              <li>Watching Sitcoms and Animes</li>
              <li>Playing Games</li>
              <li>Collecting Figurines and Comics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section active">
      <h2>My Portfolio</h2>
      <div class="project-container">
        <div class="project">
          <img src="project1.jfif" alt="Project 1">
          <h3>Technical 5</h3>
          <p>A task to create 6 pokemon cards</p>
          <a href="#" class="project-link">View Project</a>
        </div>
        <div class="project">
          <img src="project3.jfif" alt="Project 2">
          <h3>Technical 7</h3>
          <p>A task to create a home page for your favorite game.</p>
          <a href="#" class="project-link">View Project</a>
        </div>
        <div class="project">
          <img src="project2.jfif" alt="Project 3">
          <h3>Technical 8</h3>
          <p>A task to create a Flex-box simulator</p>
          <a href="#" class="project-link">View Project</a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section active">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-container">
        <div class="faq-item">
          <h3>What are your hobbies?</h3>
          <p>During my free time, I write poems, play games, and read comics.</p>
        </div>
        <div class="faq-item">
          <h3>Why did you choose BSITAGD as your course?</h3>
          <p>To gain the basic knowledge or taking the first step on making the greatest virtual reality game</p>
        </div>
        <div class="faq-item">
          <h3>What inspired you to take this course?</h3>
          <p>Be a rational person, wanting to have high income for the future.</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section active">
      <h2>Contact Me</h2>
      <form id="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>


    <!-- Social Section -->
    <section id="social" class="section active">
        <h2>Connect with Me</h2>
          <a href="#" class="social-link facebook">
        <div class="modal-content">
      <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100009036207523" target="_blank">@Euanne Miles Sequito</a></p>
      </div>
    </a>
            <a href="#" class="social-link twitter">
           <div id="twitterModal" class="modal">
            <p>Twitter: <a href="https://x.com/euannemcs_" target="_blank">@euannemcs_</a></p>
            </div>
        </a>
        <a href="#" class="social-link instagram">
            <div id="instagramModal" class="modal">
                <p>Instagram: <a href="https://www.instagram.com/euannemcs_/" target="_blank">@euannemcs_</a></p>
                </div>
        </a>
      </div>
    </section>
  </main>


  <footer>
    <p>&copy; 2024 Yohan. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
