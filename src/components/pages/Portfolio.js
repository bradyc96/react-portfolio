import React from "react";
import PortfolioCard from "../PortfolioCard";
import friendsInCheck from "../../assets/friendsInCheck.png";
import movie from "../../assets/movie.png";
import quiz from "../../assets/quiz.png";
import techBlog from "../../assets/techBlog.png";
import videoShare from "../../assets/videoShare.png";
import weatherDashboard from "../../assets/weatherDashboard.png"



export default function Portfolio() {
    return (
        
        <div class="titleHeading">
            <div id="portfolioTitleCard">
                <h2>Portfolio</h2>
            </div>

<PortfolioCard
title="Video Share"
image={videoShare}
text="An application that allows users to talk via video-chat or text-chat and share youtube video's with eachother."
repourl="https://github.com/Bram-G/Video-Share"
demourl="https://video-share.herokuapp.com/"
className="card1">
</PortfolioCard>


<PortfolioCard
title="Friends in Check"
image={friendsInCheck}
text="riends in Check is not another chess game. Users are able to play games with a friend with a single sign up. Host a room and have a friend join in. Friends are able to talk and chat, all while playing a good ol' game of chess."
repourl="https://github.com/wabarringer/project-3-FRONT"
demourl="https://friends-in-check.netlify.app/home"
className="card2">
</PortfolioCard>


<PortfolioCard
title="Wine Quiz"
image={quiz}
text="A quiz game that tests knowledge surrounding wine."
repourl="https://github.com/bradyc96/quiz-challenge"
demourl="https://bradyc96.github.io/quiz-challenge/"
className="card3">
</PortfolioCard>


<PortfolioCard
title="Weather Dashboard"
image={weatherDashboard}
text="An application that can find weather information based on city input."
repourl="https://github.com/bradyc96/weatherDashboard"
demourl="https://bradyc96.github.io/weatherDashboard/"
className="card4">
</PortfolioCard>


<PortfolioCard
title="Tech Blog"
image={techBlog}
text="A full stack application where users can create an account and post a blog."
repourl="https://github.com/bradyc96/Tech-Blog"
demourl="https://post-a-blog.herokuapp.com/"
className="card4">
</PortfolioCard>


<PortfolioCard
title="Movie Site"
image={movie}
text="An API movie application that can save titles for later and find what's trending."
repourl="https://github.com/error201/StreamingSearch"
demourl="https://error201.github.io/StreamingSearch/"
className="card4">
</PortfolioCard>

            <a href=""></a>


        </div>
    )
}