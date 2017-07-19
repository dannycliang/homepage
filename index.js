$(document).ready(function(e) {
  $( "#Welcome" ).fadeIn(1500),
    $( "#Welcome" ).fadeOut(1500, function() {
      $('body').vidbg({
         'mp4': 'http://dannyliang.com/images/final.mp4',
        }, {
                                  // Options
          muted: true,
          loop: true,
          overlay: true,
          overlayColor: '#000',
          overlayAlpha: '0.3',
        }),
        $( ".title" ).fadeIn(1000),
          $( "#AboutNav" ).fadeIn(1000, function() {
            $( "#Music" ).fadeIn(1000, function() {
              $( ".header" ).fadeIn(1000)
            })
          })
        })
      })

function name_animate(name, vid, text) {
  if ($( "#name" ).html() !== name) {
    $('body').vidbg({
                     'mp4': vid,
                      }, {
                        // Options
                        muted: true,
                        loop: true,
                  overlay: true,
                        overlayColor: '#000',
                        overlayAlpha: '0.3',
                      }),
    $( ".title" ).animate({left: "-15em", opacity: "0"}, 700),

    $( "#name" ).text(name),
    $( ".title" ).animate({left: "3em", opacity: "1"}, 700),
    $( "#AboutText" ).fadeOut(700, function() {
      $( "#AboutText").text(text),
      $( "#AboutText" ).fadeIn(700);
    })
  }
}


$( "#GMM" ).hover(function() {
    $( "#GMM" ).css("opacity", "1.0"),
      $( "#111" ).css("opacity", "0.8"),
        $( "#GTD" ).css("opacity", "0.6"),
          $( "#GTL" ).css("opacity", "0.4"),
            $( "#Blog" ).css("opacity", "0.2"),
              name_animate("Graphing March Madness", 'http://dannyliang.com/images/Sunset-Lapse.mp4', "Graphing March Madness is a site with visualizations of college basketball's yearly tournament. The graphics are created using d3.js.");
}, function() {
      $( ".header" ).animate({right: "1em"}, 300);

})

$( "#111" ).hover(function() {
    $( "#GMM" ).css("opacity", "0.8"),
      $( "#111" ).css("opacity", "1.0"),
        $( "#GTD" ).css("opacity", "0.8"),
          $( "#GTL" ).css("opacity", "0.6"),
            $( "#Blog" ).css("opacity", "0.4"),
              name_animate("NBA Survey", 'http://dannyliang.com/images/Sunset-Lapse.mp4', "111 is a network of sites based on a NBA survey I conducted in the Summer of 2017. It contains the survey itself, the results, and further analysis.");
}, function() {
  $( ".header" ).animate({right: "2em"}, 300);
})

$( "#GTD" ).hover(function() {
    $( "#GMM" ).css("opacity", "0.6"),
      $( "#111" ).css("opacity", "0.8"),
        $( "#GTD" ).css("opacity", "1.0"),
          $( "#GTL" ).css("opacity", "0.8"),
            $( "#Blog" ).css("opacity", "0.6"),
              name_animate("Games to Diamond", "http://dannyliang.com/images/Cheer-Up.mp4", "Games to Diamond is a webapp built using the Flask microframework. It runs simulations to approximate how many games a user would have to play to reach their desired rank in League of Legends.")
}, function() {
  $( ".header" ).animate({right: "3em"}, 300);
})

$( "#GTL" ).hover(function() {
    $( "#GMM" ).css("opacity", "0.4"),
      $( "#111" ).css("opacity", "0.6"),
        $( "#GTD" ).css("opacity", "0.8"),
          $( "#GTL" ).css("opacity", "1.0"),
            $( "#Blog" ).css("opacity", "0.8"),
              name_animate("Games to Legend", "http://dannyliang.com/images/Blurry-Lights.mp4", "Games to Legend is a webapp built using the Flask microframework. It runs simulations to approximate how many games a user would have to play to reach their desired rank in Hearthstone.")
}, function() {
    $( ".header" ).animate({right: "4em"}, 300);
})

$( "#Blog" ).hover(function() {
    $( "#GMM" ).css("opacity", "0.2"),
      $( "#111" ).css("opacity", "0.4"),
        $( "#GTD" ).css("opacity", "0.6"),
          $( "#GTL" ).css("opacity", "0.8"),
            $( "#Blog" ).css("opacity", "1.0"),
              name_animate("Blog", "http://dannyliang.com/images/Sunset-Lapse.mp4", "A blog with my thoughts on the NBA and the analysis of the results of my results.")
}, function() {
  $( ".header" ).animate({right: "4em"}, 300);
})

$("#GMM").click(function() {
  window.location.href = "http://dannyliang.com/GMM.html";
});

$("#111").click(function() {
  window.location.href = "http://dannyliang.com/111.html";
});

$("#GTD").click(function() {
  window.location.href = "http://gamestodiamond.herokuapp.com";
})

$("#GTL").click(function() {
  window.location.href = "http://gamestolegend.herokuapp.com";
})

$("#Resume").click(function() {
  window.location.href = "http://dannyliang.com/assets/Resume1.pdf";
})

$("#Blog").click(function() {
  window.location.href = "http://dannyliang.com/111/Blog.html";
})

$("#Spotify").click(function() {
  $("#playlist").fadeIn(500);
})

$("#About").click(function() {
  $( "#AboutText").text("I'm a sophomore at UC Berkeley studying Computer Science and Economics, who enjoys watching and playing basketball, analytics, cooking, and LeBron James. My personal projects closest to completion are available on the sidebar. Thanks for visiting! ")
  $( "#AboutText" ).toggle(500);
})
