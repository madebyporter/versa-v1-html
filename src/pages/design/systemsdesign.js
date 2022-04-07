import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import BlockParagraph from "../../components/blockParagraph"
import SectionTitle from "../../components/sectionTitle"
import ContentResumeDesign from "../../components/contentResumeDesign"

import imgProjectOATeaser from "../../images/cases/organicsalive-2019-teaser-mobile-3.png"
import imgProjectHyrecarTeaser from "../../images/cases/hyrecar-2018-teaser.png"
import imgProjectNovvumTeaser from "../../images/cases/novvum-2021-teaser-2.png"
import imgProjectRHTeaser from "../../images/cases/reactheadless-2021-teaser-2.png"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Design Engineer building systems for creative founders." description="I help design digital systems that improves the lives of early-stage founders &amp; their customers." />

    <Hero heroText="Design Engineer building systems for creative founders." heroDesc="I help design digital systems that improves the lives of early-stage founders &amp; their customers." />

    <section className="block block-section">
      <SectionTitle text="Systems Design" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Why you'll need systems design?</h3>
        <p className="t-36">
          You're a founder of a startup or small business looking to scale up your proven business model. You want to spend more time growing the business than tinkering in the design &amp; code. 
        </p>
        <p className="t-24">
          Your goal is to find an expert who can scale up your digital system, improve design usability and improve your results. I help founders by auditing your current system, creating a plan and improving the system. 
        </p>
        <ul className="list-bordered">
          <li className="t-24"><strong>Location:</strong> Remote; Slack for Communication.</li>
          <li className="t-24"><strong>Scheduling:</strong> 4-12 weeks, plus one month of support.</li>
          <li className="t-24"><strong>Deliverable:</strong> Discovery playbook, new website or app &amp; one month of support.</li>
          <li className="t-24"><strong>Qualification:</strong> Most effective for companies already making between $100,000 &amp; $500,000 before profit, with a company size of 1-10 &amp; majority of your sales are generated online.</li>
          <li className="t-24"><strong>Price:</strong> $10,000+, depending on size of project.</li>
        </ul>

        <div className="cta-bordered">
          <BlockParagraph 
            blockTitle="How to Get Started?"
            blockContent="Ready to improve your digital system? First contact me by booking time to speak with me. We’ll discuss your plans and figure out whether or not this is a good fit for you." 
            blockLinkURL="https://calendly.com/madebyporter/project"
            blockLinkTitle="Book a Project Chat"
          />
        </div>
        
      </div>

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">
        <div className="g-m-1-13 g-l-4-13 g-4-13">
          <h3 className="t-36 block-content-title margin-bottom-small">Case Studies</h3>
        </div>

        <div className="card-carousel card-carousel-cases grid g-m-1-13 g-l-1-13 g-1-13">
          <div className="card-carousel--track g-m-1-13 g-l-4-13 g-4-13">
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectHyrecarTeaser} alt="HyreCar" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Product</span>
                <span className="card--tag">Marketplace</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Hyrecar</h3>
                <p className="card--paragraph t-18">Helping redesign the experience for a LA-based startup that lets customers rent a car for rideshare and delivery services.</p>
                <Link className="card--link t-18" to="/cases/hyrecar-2018">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectOATeaser} alt="Organics Alive Garden" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Website</span>
                <span className="card--tag">e-Commerce</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Helping a Southern California organic cannabis fertilizer brand improve their digital processes &amp; customer experiences.</p>
                <Link className="card--link t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectNovvumTeaser} alt="Novvum" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Website</span>
                <span className="card--tag">Agency</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Novvum.io</h3>
                <p className="card--paragraph t-18">Helping a remote development agency position their website to attract teams who need technical strategy &amp; execution.</p>
                <Link className="card--link t-18" to="/cases/novvum-2021">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectRHTeaser} alt="ReactHeadless" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Website</span>
                <span className="card--tag">Agency</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">ReactHeadless.com</h3>
                <p className="card--paragraph t-18">Helping a remote development agency build a mini-site for a specialized offering that services their e-Commerce clients.</p>
                <Link className="card--link t-18" to="/cases/reactheadless-2021">View Case Study &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Frequently Asked Questions</h3>
        <ul className="list-bordered">
          <li className="t-18">
            <strong>How do I know we're a good fit?</strong><br />
            Here's some questions for you. Could we just clone one of my past projects for your project? Does the design style you see within my past projects work for you? Are you pulling in more than $100,000 year in revenue or have more than $100,000 in funding? Are most of your touchpoints online? If you answer yes to most of these questions, then we'll be a good fit!
          </li>
          <li className="t-18">
            <strong>I already know what I want and just need you to just design.</strong><br />
            The service I offer are for Founders who need to pass on the design thinking responsibilities so the Founder can focus on business, marketing or engineering. If you're looking for a designer that can come in to work on an existing solution or plan, I can refer you to a freelance designer who can help you!
          </li>
          <li className="t-18">
            <strong>I would like to see more visual work. Where can I find more visuals?</strong><br />
            If you're looking for more visuals for a specific project, let me know <a href="mailto:general@madebyporter.com">here</a>. I can add more screens to a certain case study or show you screens within Figma on a video call!
          </li>
          <li className="t-18">
            <strong>What happens on this call with you?</strong><br />
            We'll talk about your current problems with your app. Is your editing process cumbersome? Are customers complaining about user experience issues? These are the things we will talk about.
          </li>
          <li className="t-18">
            <strong>How long is the average project?</strong><br />
            Most projects take about 1-3 months for websites and 3-6 months for apps. 
          </li>
          <li className="t-18">
            <strong>Can you work in our office?</strong><br />
            Most of the time I work with clients remote. If we're in the same city, I'll make exceptions to have very important meetings in person. If I need to travel far, then the client is responsible for travel fees, which will be included in the budget or expensed. 
          </li>
          <li className="t-18">
            <strong>How will we communicate during projects?</strong><br />
            Depends on your needs. I can communicate either through email, phone, Zoom, Google Hangouts, Slack, etc.
          </li>
        </ul>
      </div>

      
    </section>
  </Layout>
)

export default IndexPage
