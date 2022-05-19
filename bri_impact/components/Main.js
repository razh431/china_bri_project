import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import React from "react";
import Graph from "./graph";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src="/static/images/pic01.jpg" alt="" />
          </span>
          <p>
            The Belt and Road Initiative (BRI) is a number of strategic
            investments and initiatives taken by the Chinese government to
            improve development across Asia, Europe, and Africa. The influence
            of the BRI has also extended into Latin America and South Pacific.
            The development strategy is seen to increase China’s soft and hard
            power. There have been increasing criticisms, especially from
            western countries such as the US, of China's motivations for the
            project. One such criticism is that countries that China invests in
            often fall into a “debt trap”, and as a result, these countries
            often increase their reliance on China.
          </p>
          <p>
            This research paper aims to analyze how the BRI impacts the economy
            of the receiving countries. Because the BRI extends through many
            continents, a case study through one of the bordering countries of
            China, Kazakhstan, can give insight to its economic impacts. One of
            the central terminals connecting China to central Asia, Khorgos, on
            the Chinese side of the border, grew to a population of more than
            100,000 people after it opened nearly only 5 years ago (Standish
            2019). Analysis of the issue of the “debt trap” in Kazakhstan and
            its impacts on trade, foreign investments, as well as oil increases
            could contribute to a better understanding of China’s BRI.
          </p>
          <p>
            Kazakhstan has an interesting political dynamic with China. While it
            realizes that China has immense geopolitical power, some of the
            general population have contention with China due to its treatment
            of the Kazakh population in Xinjiang, China. This has largely been
            ignored by the government as it maintains its economic relations
            with China. Thus, a case study on Kazakhstan can shed light on the
            BRI’s economic impacts on countries that are reluctant to become
            overly dependent on China. Knowing the benefits or harms the BRI
            could bring also has broader implications for international
            relations. Through an economic analysis, this paper also offers a
            critique of the political narrative of BRI as “neocolonialism”.
          </p>
          {close}
        </article>
        <article
          id="data"
          className={`${this.props.article === "data" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Data/Analysis</h2>

          <Graph></Graph>
          <span className="image main">
            <img src="/static/images/bar.jpg" alt="" />
          </span>

          <h3>Debt</h3>
          <p>
            I took data from debt of one quarter of the year from 2013 to 2021
            and graphed the debt owed to China as well as to the Netherlands.
            From these graphs, one can see that the debt owed to the Netherlands
            is much higher than the debt owed to China. The Netherlands has
            started investing in Kazakhstan’s technologies and agriculture
            practices since 2010, largely due to Kazakhstan’s abundant natural
            oil resources. Kazakhstan exports crude oil and petroleum products
            and its products to the Netherlands (Dutch Ministry of Agriculture,
            Nature, and Food Quality 2020).
          </p>
          <p>
            From the graph, as the years increase, the debt owed to China is
            decreasing while debt owed to the Netherlands is increasing. In
            fact, the debt difference between the two countries is almost over
            30,000 million during any given year. Comparisons between the two
            show that Kazakhstan’s reliance on China is not nearly as large as
            it is on the Netherlands.
          </p>
          <p>
            Next, we graphed the top five countries within each quarter of the
            year and found that the top three were consistent: Netherlands,
            United States, and United Kingdom. China was in the top five
            investors of Kazakhstan until 2021, possibly due to Covid. This,
            again, confirms that Kazakhstan, while geographically close to
            China, has a multivector approach to building relations with both
            western and eastern countries.
          </p>

          <h3>Jobs</h3>
          <p>
            The table of projects taken from Kazakhstan shows that there are
            many different types of investment within Kazakhstan. These
            investment projects between China and Kazakhstan can create a total
            of over 25,800 jobs (Kazakhstan Invest National Company 2019). This
            includes created jobs (almost 6,000 jobs) as well as the forecasted
            number of jobs for projects that are proposed but not yet accepted.
          </p>
          <p>
            However, data shows that the jobs created between China and
            Kazakhstan are usually still filled by Chinese workers, even for low
            skilled jobs, rather than locals. A study conducted by the
            International Trade Union Confederation, authored by Harri Taliga
            explains this is due to “an opportunity to avoid applying
            Kazakhstan’s labor legislation, to minimize contacts with local
            authorities and the local population, to guarantee a highly amenable
            workforce etc” (Taliga 12). Chinese companies also maintain higher
            wages for Chinese workers. Local authorities have tried to raise
            certain hiring quotas; in Kazakhstan, investors must recruit at
            least 70% of the workforce from Kazakhstan. However, China has not
            followed these regulations under the pretext that there exists “a
            lack of an appropriately skilled workforce in Kazakhstan” (Taliga
            12). However, governments are trying to solve this by setting strict
            quotas. In 2021, however, the quota of foreign workers allowed to
            work in Kazakhstan was set to 0.31% of the workforce or 29.3
            thousand people, limiting the number of Chinese workers allowed
            (Aizada Arystanbek 2021).
          </p>
          <p>
            Because of the lack of authorities and structure to enforce these
            rules, it is expected that most of the jobs created from the
            investment projects will be taken by Chinese immigrants rather than
            Kazakhstan locals. Analysis shows that roughly 10-30% of hires have
            been Chinese workers in Tajikistan and Kyrgyzstan (Kley 2021).
            Currently, 43% of the workers in This hurts China’s soft power as
            well as economy, but does not necessarily benefit Kazakhstan.
          </p>

          <h3>Kazakhstan-China Oil Pipeline</h3>
          <p>
            A significant investment project between China and Kazakhstan is the
            Kazakhstan-China Oil Pipeline. Kazakhstan lacks processing
            technologies needed to expand its natural resources sector and
            increase exports. China needs to shift its excess industrial
            capacities away from manufacturing and instead grow its economy.
            Thus, the two countries negotiated the Kazakhstan-China Oil Pipeline
            (Kley 2021).
          </p>
          <p>
            The Kazakhstan-China oil pipeline is China’s first direct oil import
            pipeline. The pipeline pumps over 130,000 barrels per day. Since its
            construction in 2009 and other pipelines such as the Caspian
            Pipeline Consortium (CPC), Kazakhstan has become a globally relevant
            oil exporter. Natural resources account for roughly 90% of exports
            in Kazakhstan (Foreign Brief 2019). However, the Kazakhstan-China
            pipeline produces less than 10% of the CPC, which has a daily
            capacity of 1.4 million barrels. This investment heavily increased
            the exporting capacity of Kazakhstan.
          </p>

          <h3>Khorgos</h3>
          <p>
            One of the largest investment projects in the BRI is the Khorgos
            Gateway, forecasted to be the largest dry port in the world,
            connecting China and Kazakhstan through rails. Since its opening in
            2013, Khorgos has seen a slight increase in trade and development.
            It facilitates a network of land ports, special economic zones, and
            free trade zones. According to “Bloomberg QuickTake: Originals”,
            Khorgos moved through roughly 160,000 TEU (containers) in 2019 since
            its opening. Currently, land transport is relatively more expensive
            than martime transport: the average freight cost of land transport
            area is $2619.59 while that of the sea transport area is $2235.30
            (Lu). However, studies also show that “land transport may be
            undervalued at present due to long-term cooperative behavior between
            governments or enterprises with maritime companies” (Lu). Land
            transport also becomes more frequent if time were a significant
            factor. Thus, in the near future, one can expect to see an increase
            in trade using land transport.
          </p>
          <p>
            Khorgos, as the biggest dry port in the world, does not have
            substantial traffic compared to Shanghai. However, as land transport
            becomes more popular with the expansion of the BRI, trade will
            increase through Kazakhstan. In roughly 2013, trade between
            Kazakhstan and China was worth $28.9 billion, replacing Russia as
            Kazakhstan’s largest trading partner (Jamali, 2020).
          </p>
          <p>
            One of the central terminals connecting China to central Asia,
            Khorgos, on the Chinese side of the border, grew to a population of
            more than 100,000 people after it opened nearly only 5 years ago
            (Standish 2019). Currently, there are a number of people crossing
            the borders of China and Kazakhstan due to the economic free trade
            zone that Khorgos is part of. According to Lisa Kaestner and
            Wolfgang Fengler from Brooking.edu, “since the border point opened
            in December 2011, the number of people crossing into China and back
            grew about 1,000 per day”(Kaestner 2022). Most of the people
            crossing into China and back are traders and shoppers to buy Chinese
            goods. However, reporter Youyou Zhou from Quartz Things states that
            most of the development of “five multi-story shopping complexes
            housing over 2,000 shops have been built on the Chinese side. The
            single shopping mall on the Kazakh side is still under construction
            in 2019.” (Zhou 2019).
          </p>
          <p>
            This shows that while these areas are more developed, there does not
            seem to be increases in development on the Kazakhstan side. The
            Chinese side has flourished while the Kazakhstan side has not seen
            much growth. Most of the border crossings seem to be from the
            Kazakhstan side into China for shopping purposes– customers are able
            to get their goods for much cheaper on the Chinese side than in
            Kazakhstan.
          </p>
          {close}
        </article>

        <article
          id="methods"
          className={`${this.props.article === "methods" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Methods</h2>

          <p>
            Research for analysis on the BRI’s impact on Kazakhstan will be
            quantitative. Because the analysis will be based on the economic
            impacts, quantitative data will be helpful in analyzing due to the
            BRI’s establishment in the recent years in Khorgos. The data will be
            obtained through primary and secondary sources, namely through
            papers similar to “Banking on the Belt and Road”, which gave a lot
            of data on recent trends on development and statistics within the
            different projects on the BRI. Research on China’s loan policy, on
            relations with China, as well as how a particular country was
            attracted to BRI negotiated with China and concluded agreement could
            also help with economic analysis. Then, analysis on the local
            economy would also be qualitative, which would include employment
            rates. Most of these data will be temporal, with before and after
            the establishment of the BRI as the index and comparison values.
            This data will be descriptive as well as correlational. Analysis of
            this correlation will help with the correlation, and the descriptive
            factor will be the numerical data from employment rates, millions of
            dollars raised, currency fluctuations, etc.
          </p>
          <p>
            Since economic impact is measured, trade impacts, foreign
            investments, as well as oil production, which are all indicators of
            economic activity, will be analyzed. This will be done through a
            case study pertaining to Kazakhstan on China’s BRI influence. This
            case study can then be used to explain the economic impacts on
            countries that do not have a strong bond with China, which could
            help other developing countries evaluate their decision on
            collaboration with China.
          </p>
          <p>
            Limitations to this research could potentially include data
            gathering. Because Khorgos is a relatively new terminal (built in
            2013), there may not be enough data surrounding specifically the
            years after 2013. However, there will be data on Kazakhstan, not
            just generally in Khorgos. Also, analysis of the data may show that
            certain areas will benefit while others, such as the issue of
            circular debt, may have negative impacts.
          </p>
          {close}
        </article>

        <article
          id="conclusion"
          className={`${this.props.article === "conclusion" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Conclusion</h2>
          <p>
            BRI investment projects increase the amount of trade and
            infrastructure for the area of investment. This paper analyzed the
            impacts of the BRI on job increase, trade, debt incurrence, as well
            as two of the largest investment projects: Khorgos and the
            Kazakhstan-China Oil Pipeline. Analysis shows that China, not
            Kazakhstan, benefits from these investments, but there does not seem
            to be substantial harm or debt incurrence as many have feared due to
            these projects. The Kazakhstan-China Oil Pipeline increased the
            production of oil in Kazakhstan, stimulating the economy, but also
            changed the main export to natural resources for the economy. In
            this sense, the economy of Kazakhstan has benefited. This is
            possible due to Kazakhstan’s multi-vector political approach in its
            well-established relationships with European countries as well as
            the US. While Kazakhstan has not seen an increase in debt, research
            also shows that debt is hard to measure as many contracts with
            Chinese companies have forbidden the disclosure of debt.
          </p>
          <p>
            Investment projects in the BRI did not increase local hires of the
            jobs, even the low skilled jobs such as drivers and cooks, within
            Kazakhstan because Chinese companies preferred Chinese workers.
            Although better infrastructure increased trade, land transport has
            not been popular due to its cost. However, researchers concluded
            that land transport is currently undervalued, and as the BRI
            expands, we can expect to see an increase in land transport of
            goods.
          </p>
          <p>
            Since China has become Kazakhstan’s largest trading partner, it has
            created a beneficiary relationship with China. China remains one of
            the top four investors of Kazakhstan, as shown from the graphs. This
            shows that the relationship with China is not entirely dependent,
            but there are benefits, or a “win-win”, to both countries. The case
            study on Kazakhstan can be further generalized to countries
            bordering China that may seek loans or agree to investment projects.
            These countries should also seek out multi-vector approaches similar
            to that of Kazakhstan instead of solely relying on China. Kazakhstan
            is one of the richer countries within Central Asia; Tajikistan and
            Kyrgyzstan have less exporting capabilities. An exclusive foreign
            policy for only one country (such as China) would be suboptimal to a
            multi-vector approach as Kazakhstan has adopted.
          </p>
          {close}
        </article>

        <article
          id="results"
          className={`${this.props.article === "results" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Results</h2>

          <p>
            The case study from Kazakhstan shows that the BRI does bring some
            positive effects to the Kazakhstan economy. Analysis of the trade
            imports brought on by a significant BRI project, Khorgos, shows that
            there are not many benefits to the Kazakhstan economy. There is an
            increase into the Chinese border, but not the other way– most of the
            money is leaving the Kazakhstan economy. Unfortunately, while there
            are a number of jobs that are created from the BRI investments,
            these jobs are not usually given to Kazakhstan locals but rather
            mainland Chinese workers. However, these can be offset by some of
            the positive effects from the BRI: the debt to China is decreasing
            rather than rising. The investments in the oil and natural gas
            industry has helped the Kazakhstan economy in terms of exporting oil
            and trade. Kazakhstan has a multilateral approach to its
            international relationships, with most of the reliance on the United
            States, Netherlands, and the United Kingdom rather than its
            bordering country China.
          </p>
          <p>
            This case study on Kazakhstan can be applied to other countries in
            neighboring China. Kazakhstan is extremely rich in its natural oil
            resources, which makes it an enticing prospect for European
            investment. Countries such as Malaysia also have large petroleum
            outputs. As seen from Kazakhstan, countries that attract European
            investors can also maintain relationships with China. Kazakhstan’s
            relationship with China can be generalized to these neighboring
            countries.
          </p>
          <p>
            Since Kazakhstan’s independence in 1991, over a million ethnic
            Kazakhs have returned to Kazakhstan, most of whom have ties with the
            one million ethnic Kazakhs that still live in China. According to
            Professor Roberts from the George Washington University, “ethnic
            Kazakhs are the largest group after Uyghurs to be subjected to the
            policies implemented by the Chinese state in the Uyghur region”. The
            policies have been heavily debated; China denies any allegations to
            the genocides. Some of these policies have been re-education camps;
            roughly “between several hundred thousand and just over one million
            have been detained in Xinjiang” (Putz 2018). Kazakhstan also has the
            largest Uyghur diaspora, with over 200,000 Uyghurs living in
            Kazakhstan.
          </p>
          <p>
            Kazakhstan’s relation with China is one that is extremely special
            because of its reliance and yet unwillingness to be dependent on
            China because of the aforementioned problems. However, its
            multivector political approach can be an example to other countries
            in the region. As seen by its investments and debt breakdown,
            Kazakhstan trades with and is in debt to many European countries as
            well as to China, indicating that it is reliant but not entirely
            dependent on China for its growing economy. Many of the other
            nations can follow this approach, attracting investments from other
            countries due to their natural resources or labor. China’s foreign
            policy ensures that it does not participate in or control the
            internal affairs of the countries it invests in.
          </p>
          <p>
            However, there are many countries that do not have the multi-vector
            political approach that Kazakhstan has. In this case, if their main
            investor is China, there is often the warning of the “debt trap”.
            The “debt trap” is a cycle of debt that countries fall into as China
            owns most of the investments and holds a large share of the
            projects. In the past, China has often forgiven debt in many
            countries. According to Yun Sun, a researcher from Johns Hopkins
            University, China has a tradition of forgiving interest-free debts.
            However, she further states that “zero-interest loans make up only a
            small portion of Africa’s debt owed to China.” (Sun 2022).
            Kazakhstan’s government has not fallen into this debt cycle because
            of the other investments as well as its rising economy due to its
            natural resources, but smaller countries may not have these
            resources and means to do so.
          </p>
          <p>
            According to a study done by Research Lab at William & Mary states
            that, “Chinese contracts give lenders considerable discretion to
            cancel loans and/or demand full repayment ahead of schedule”
            (Gelpern et al. 45). Gelpern et al also write that many of the
            contracts contain clauses that refer to the borrower’s promise not
            to disclose these contracts or even its existence (Gelpern et al,
            4). This makes debt hard to track and calculate. This could possibly
            be the case for the Kazakhstan government as well, but the published
            national data shows that debt is decreasing. The state of the loans
            and debt is further clouded when China masks these payments in terms
            of oil, which the World Bank calls “barter deals”. This offsets the
            true amount of the payment. Steven Honig from Foreign Brief writes,
            “This type of loan relief strategy will cause Central Asian states
            to produce more oil just to repay loans, which might steer
            government resources away from ameliorating public health concerns
            and economic diversiﬁcation.”
          </p>
          <p>
            There are also other political impacts of China’s investment in
            Kazakhstan that have implications for other countries around China.
            China’s foreign policy can be expressed by its Five Principles of
            Peaceful Coexistence. China stresses the sovereignty of all states
            and does not infringe on its internal affairs. Thus, it has not
            tried to influence Kazakhstan politics during its recent protests in
            January 2022; in fact, Chinese Foreign Minister Wang Yi declared
            these protests an internal Kazakhstani affair. China’s foreign
            policy indicates that while China’s influence is growing in these
            nations, it is not necessarily trying to impact these countries
            politically.
          </p>
          {close}
        </article>

        <article
          id="citations"
          className={`${this.props.article === "citations" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Citations</h2>
          <h3>
            Code for the graphs, written by Rachel Zhou:
            https://github.com/razh431/china_bri_project.git
          </h3>
          <p>
            Aizada Arystanbek in Business on 21 April 2021. &ldquo;More than
            14,000 Foreign Citizens Work in Kazakhstan Today.&rdquo; The Astana
            Times, April 21, 2021.&nbsp;
            <a href="https://astanatimes.com/2021/04/more-than-14-thousand-foreign-citizens-work-in-kazakhstan-today/">
              https://astanatimes.com/2021/04/more-than-14-thousand-foreign-citizens-work-in-kazakhstan-today/
            </a>
            .
          </p>
          <p>
            Ani. &ldquo;China&apos;s BRI Left Several Countries Saddled with
            &apos;Hidden Debts&apos;: Report.&rdquo; Business Standard.
            Business-Standard, September 30, 2021.&nbsp;
            <a href="https://www.business-standard.com/article/international/china-s-bri-left-several-countries-saddled-with-hidden-debts-report-121093000947_1.html">
              https://www.business-standard.com/article/international/china-s-bri-left-several-countries-saddled-with-hidden-debts-report-121093000947_1.html
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/hashtag/bloombergquicktake">
              Bloomberg Quicktake
            </a>
            , &ldquo;If China Builds It, Will They Come?&rdquo; YouTube video,
            16:02, January 7, 2021,&nbsp;
            <a href="https://www.youtube.com/watch?v=ZpqtHvPS8OQ">
              https://www.youtube.com/watch?v=ZpqtHvPS8OQ
            </a>
            .
          </p>
          <p>
            Chatzky, Andrew and&nbsp;
            <a href="https://www.cfr.org/bio/james-mcbride">
              James McBride
            </a>{" "}
            &ldquo;China&apos;s Massive Belt and Road Initiative.&rdquo; Council
            on Foreign Relations. Council on Foreign Relations.
            https://www.cfr.org/backgrounder/chinas-massive-belt-and-road-initiative.&nbsp;
          </p>
          <p>
            Chellaney, Brahma, et al. &ldquo;China&apos;s Debt-Trap Diplomacy:
            By Brahma Chellaney.&rdquo;&nbsp;Project Syndicate, 30 Aug. 2017,
            https://www.project-syndicate.org/commentary/china-one-belt-one-road-loans-debt-by-brahma-chellaney-2017-01.&nbsp;
          </p>
          <p>
            &ldquo;Construction of Kazakh-Chinese Investment Projects Will Be
            Carried out in Accordance with the Legislation of Kazakhstan Source:
            Https://Invest.gov.kz/Media-Center/Press-Releases/Stroitelstvo-Kazakhstansko-Kitayskikh-Invest-Proektov-Budet-Vestis-v-Sootvetstvii-s-Zakonodatelstvom/.&rdquo;&nbsp;
          </p>
          <p>
            Invest In Kazakhstan. Kazakhstan Invest, October 9, 2019.
            https://invest.gov.kz/media-center/press-releases/stroitelstvo-kazakhstansko-kitayskikh-invest-pr
            oektov-budet-vestis-v-sootvetstvii-s-zakonodatelstvom/.
          </p>
          <p>
            Diplomat, Niva Yau for The. &ldquo;Tracing the Chinese Footprints in
            Kazakhstan&apos;s Oil and Gas Industry.&rdquo; &ndash; The Diplomat.
            for The Diplomat, December 12, 2020.&nbsp;
            <a href="https://thediplomat.com/2020/12/tracing-the-chinese-footprints-in-kazakhstans-oil-and-gas-industry/">
              https://thediplomat.com/2020/12/tracing-the-chinese-footprints-in-kazakhstans-oil-and-gas-industry/
            </a>
            .
          </p>
          <p>
            Downs, Erica. &ldquo;The China-Pakistan Economic Corridor Power
            Projects: Insights Into Environmental and Debt
            Sustainability,&rdquo;&nbsp;Center on Global Energy
            Policy&nbsp;&nbsp;(2019): 38
          </p>
          <p>
            Gelpern, Anna, Sebastian Horn, and Christoph Trebesch. &ldquo;How
            China Lends: A Rare Look into 100 Debt Contracts with Foreign
            Governments.&rdquo;&nbsp;SSRN Electronic Journal, 2021.
            https://doi.org/10.2139/ssrn.3840991.
          </p>
          <p>
            Jamali, Ahmed Bux. &ldquo;China&apos;s Silk Road Diplomacy in
            Kazakhstan.&rdquo; Asia Times, June 5, 2020.
            https://asiatimes.com/2020/06/chinas-silk-road-diplomacy-in-kazakhstan/.
          </p>
          <p>
            Kaestner, Lisa, and Wolfgang Fengler. &ldquo;How the Middle of
            Nowhere Could Become a Major Trade Corridor.&rdquo; Brookings.
            Brookings, March 9, 2022.
            https://www.brookings.edu/blog/future-development/2016/09/23/how-the-middle-of-nowhere-could-become-a-major-trade-corridor/.
          </p>
          <p>
            Kley, Dirk van der, and Niva Yau. &ldquo;How Central Asians Pushed
            Chinese Firms to Localize.&rdquo; Carnegie Endowment for
            International Peace, October 15, 2021.&nbsp;
            <a href="https://carnegieendowment.org/2021/10/15/how-central-asians-pushed-chinese-firms-to-localize-pub-85561">
              https://carnegieendowment.org/2021/10/15/how-central-asians-pushed-chinese-firms-to-localize-pub-85561
            </a>
            .
          </p>
          <p>
            Lindberg, Kari and Tripti Lahiri. &ldquo;From Asia to Africa,
            China&apos;s &lsquo;Debt-Trap Diplomacy&rsquo; Was under Siege in
            2018.&rdquo; Quartz. Quartz.
            https://qz.com/1497584/how-chinas-debt-trap-diplomacy-came-under-siege-in-2018/.&nbsp;
          </p>
          <p>
            Lu, M., Chen, Y., Morphet, R.&nbsp;et al.&nbsp;The spatial
            competition between containerised rail and sea transport in
            Eurasia.&nbsp;Palgrave Commun&nbsp;5, 122 (2019).
            https://doi.org/10.1057/s41599-019-0334-6
          </p>
          <p>
            Malik, A., Parks, B., Russell, B., Lin, J., Walsh, K., Solomon, K.,
            Zhang, S., Elston, T., and S. Goodmanm. &ldquo;Banking on the Belt
            and Road: Insights from a new global dataset of 13,427 Chinese
            development projects,&rdquo; (2021) : 1-166 Williamsburg, VA:
            AidData at William &amp; Mary.
          </p>
          <p>
            Mauk, Ben. &ldquo;Can China Turn the Middle of Nowhere into the
            Center of the World Economy?&rdquo; The New York Times. The New York
            Times, January 30, 2019.
            https://www.nytimes.com/interactive/2019/01/29/magazine/china-globalization-kazakhstan.html.&nbsp;
          </p>
          <p>
            Ministerie van Landbouw, Natuur en Voedselkwaliteit. &ldquo;The
            Netherlands Is Investor Number One in Kazakhstan.&rdquo;
            Nieuwsbericht | Agroberichten Buitenland. Ministerie van Landbouw,
            Natuur en Voedselkwaliteit, February 11, 2020.
            https://www.agroberichtenbuitenland.nl/actueel/nieuws/2020/02/11/the-netherlands-is-investor-number-one-in-kazakhstan.
          </p>
          <p>
            Putz, Catherine. &ldquo;Carefully, Kazakhstan Confronts China about
            Kazakhs in Xinjiang Re-Education Camps.&rdquo; &ndash; The Diplomat.
            for The Diplomat, June 18, 2018.
            https://thediplomat.com/2018/06/carefully-kazakhstan-confronts-china-about-kazakhs-in-xinjiang-re-education-camps/.
          </p>
          <p>
            Roberts, Sean R., and Dana Rice. &ldquo;Kazakhstan&apos;s Ambiguous
            Position towards the Uyghur Cultural Genocide in China.&rdquo; The
            Asan Forum, December 20, 2021.&nbsp;
            <a href="https://theasanforum.org/kazakhstans-ambiguous-position-towards-the-uyghur-cultural-genocide-in-china/">
              https://theasanforum.org/kazakhstans-ambiguous-position-towards-the-uyghur-cultural-genocide-in-china/
            </a>
            .
          </p>
          <p>
            Standish, Reid. &ldquo;China&apos;s Central Asian Plans Are
            Unnerving Moscow.&rdquo; Foreign Policy, December 23, 2019.
            https://foreignpolicy.com/2019/12/23/china-russia-central-asia-competition/.&nbsp;
          </p>
          <p>
            Taliga, Harri. &ldquo;Belt and Road Initiative in Central
            Asia.&rdquo; International Trade Union Confederation. International
            Trade Union Confederation, 2021.
            https://www.ituc-csi.org/IMG/pdf/belt_and_road_initiative_in_central_asia.pdf.
          </p>
          <p>
            Sun, Yun. “China and Africa's Debt: Yes to Relief, No to Blanket
            Forgiveness.” Brookings. Brookings, March 9, 2022.
            https://www.brookings.edu/blog/africa-in-focus/2020/04/20/china-and-africas-debt-yes-to-relief-no-to-blanket-forgiveness/.
          </p>
          <p>
            &ldquo;Who Pays? Central Asia and China&apos;s Debt Dilemma.&rdquo;
            Foreign Brief, June 4, 2020.
            https://foreignbrief.com/former-soviet-union/who-pays-central-asia-and-chinas-debt-dilemma/.
          </p>
          <p>
            Zhou, Youyou. &ldquo;The Buyers and Sellers of Khorgos, a Special
            Trade Zone on the Kazakhstan-China Border.&rdquo; Quartz. Quartz,
            October 26, 2019.
            https://qz.com/1720196/who-visits-khorgos-the-trade-zone-on-china-kazakhstan-border/.&nbsp;
          </p>

          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;
