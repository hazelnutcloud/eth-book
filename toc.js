// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Part I: Genesis (2013-2015)</li><li class="chapter-item expanded "><a href="part-1-genesis/chapter-01-vision-emerges.html"><strong aria-hidden="true">1.</strong> The Vision Emerges</a></li><li class="chapter-item expanded "><a href="part-1-genesis/chapter-02-building-foundation.html"><strong aria-hidden="true">2.</strong> Building the Foundation</a></li><li class="chapter-item expanded "><a href="part-1-genesis/chapter-03-crowdsale-early-development.html"><strong aria-hidden="true">3.</strong> The Crowdsale and Early Development</a></li><li class="chapter-item expanded "><a href="part-1-genesis/chapter-04-olympic-era.html"><strong aria-hidden="true">4.</strong> The Olympic Era</a></li><li class="chapter-item expanded "><a href="part-1-genesis/chapter-05-frontier-launch.html"><strong aria-hidden="true">5.</strong> Frontier - The Minimal Viable Ethereum</a></li><li class="chapter-item expanded affix "><li class="part-title">Part II: The Early Years (2015-2017)</li><li class="chapter-item expanded "><a href="part-2-early-years/chapter-06-homestead.html"><strong aria-hidden="true">6.</strong> Homestead - Stabilization</a></li><li class="chapter-item expanded "><a href="part-2-early-years/chapter-07-dao-experiment.html"><strong aria-hidden="true">7.</strong> The DAO Experiment</a></li><li class="chapter-item expanded "><a href="part-2-early-years/chapter-08-fork-in-road.html"><strong aria-hidden="true">8.</strong> The Fork in the Road</a></li><li class="chapter-item expanded "><a href="part-2-early-years/chapter-09-under-attack.html"><strong aria-hidden="true">9.</strong> Under Attack</a></li><li class="chapter-item expanded "><a href="part-2-early-years/chapter-10-ico-boom.html"><strong aria-hidden="true">10.</strong> The ICO Boom Begins</a></li><li class="chapter-item expanded affix "><li class="part-title">Part III: Scaling Challenges and Growing Pains (2017-2019)</li><li class="chapter-item expanded "><a href="part-3-scaling/chapter-11-byzantium.html"><strong aria-hidden="true">11.</strong> Byzantium - The Metropolis Part 1</a></li><li class="chapter-item expanded "><a href="part-3-scaling/chapter-12-bubble-cryptokitties.html"><strong aria-hidden="true">12.</strong> The 2017 Bubble and CryptoKitties</a></li><li class="chapter-item expanded "><a href="part-3-scaling/chapter-13-constantinople.html"><strong aria-hidden="true">13.</strong> Constantinople/St. Petersburg</a></li><li class="chapter-item expanded "><a href="part-3-scaling/chapter-14-defi-foundations.html"><strong aria-hidden="true">14.</strong> The DeFi Foundations</a></li><li class="chapter-item expanded "><a href="part-3-scaling/chapter-15-istanbul.html"><strong aria-hidden="true">15.</strong> Istanbul</a></li><li class="chapter-item expanded affix "><li class="part-title">Part IV: The DeFi Revolution and Proof of Stake Journey (2020-2022)</li><li class="chapter-item expanded "><a href="part-4-defi-pos/chapter-16-muir-glacier-defi-summer.html"><strong aria-hidden="true">16.</strong> Muir Glacier and the DeFi Summer</a></li><li class="chapter-item expanded "><a href="part-4-defi-pos/chapter-17-beacon-chain.html"><strong aria-hidden="true">17.</strong> The Beacon Chain Genesis</a></li><li class="chapter-item expanded "><a href="part-4-defi-pos/chapter-18-berlin.html"><strong aria-hidden="true">18.</strong> Berlin - Optimization Focus</a></li><li class="chapter-item expanded "><a href="part-4-defi-pos/chapter-19-london.html"><strong aria-hidden="true">19.</strong> London - The Fee Revolution</a></li><li class="chapter-item expanded "><a href="part-4-defi-pos/chapter-20-nft-explosion.html"><strong aria-hidden="true">20.</strong> The NFT Explosion</a></li><li class="chapter-item expanded "><a href="part-4-defi-pos/chapter-21-altair.html"><strong aria-hidden="true">21.</strong> Altair and Beyond</a></li><li class="chapter-item expanded "><a href="part-4-defi-pos/chapter-22-arrow-gray-glacier.html"><strong aria-hidden="true">22.</strong> Arrow Glacier to Gray Glacier</a></li><li class="chapter-item expanded affix "><li class="part-title">Part V: The Merge and New Era (2022-2025)</li><li class="chapter-item expanded "><a href="part-5-merge-era/chapter-23-the-merge.html"><strong aria-hidden="true">23.</strong> The Merge - Ethereum&#39;s Biggest Upgrade</a></li><li class="chapter-item expanded "><a href="part-5-merge-era/chapter-24-shanghai-capella.html"><strong aria-hidden="true">24.</strong> Shanghai/Capella - Completing the Circle</a></li><li class="chapter-item expanded "><a href="part-5-merge-era/chapter-25-cancun-deneb.html"><strong aria-hidden="true">25.</strong> Cancun/Deneb - The Blob Revolution</a></li><li class="chapter-item expanded "><a href="part-5-merge-era/chapter-26-layer-2-ecosystem.html"><strong aria-hidden="true">26.</strong> The Layer 2 Ecosystem</a></li><li class="chapter-item expanded "><a href="part-5-merge-era/chapter-27-pectra-prague.html"><strong aria-hidden="true">27.</strong> Pectra and Prague/Electra</a></li><li class="chapter-item expanded affix "><li class="part-title">Part VI: Technical Deep Dives</li><li class="chapter-item expanded "><a href="part-6-technical/chapter-28-evm-evolution.html"><strong aria-hidden="true">28.</strong> The EVM Evolution</a></li><li class="chapter-item expanded "><a href="part-6-technical/chapter-29-state-growth.html"><strong aria-hidden="true">29.</strong> State Growth and Solutions</a></li><li class="chapter-item expanded "><a href="part-6-technical/chapter-30-mev.html"><strong aria-hidden="true">30.</strong> MEV - The Dark Forest</a></li><li class="chapter-item expanded "><a href="part-6-technical/chapter-31-standards.html"><strong aria-hidden="true">31.</strong> The Standards That Built an Ecosystem</a></li><li class="chapter-item expanded affix "><li class="part-title">Part VII: The Social Layer</li><li class="chapter-item expanded "><a href="part-7-social/chapter-32-governance.html"><strong aria-hidden="true">32.</strong> Governance Evolution</a></li><li class="chapter-item expanded "><a href="part-7-social/chapter-33-community.html"><strong aria-hidden="true">33.</strong> The Ethereum Community</a></li><li class="chapter-item expanded "><a href="part-7-social/chapter-34-funding.html"><strong aria-hidden="true">34.</strong> Funding the Ecosystem</a></li><li class="chapter-item expanded affix "><li class="part-title">Part VIII: Impact and Future</li><li class="chapter-item expanded "><a href="part-8-impact/chapter-35-global-impact.html"><strong aria-hidden="true">35.</strong> Ethereum&#39;s Global Impact</a></li><li class="chapter-item expanded "><a href="part-8-impact/chapter-36-regulatory.html"><strong aria-hidden="true">36.</strong> The Regulatory Journey</a></li><li class="chapter-item expanded "><a href="part-8-impact/chapter-37-road-ahead.html"><strong aria-hidden="true">37.</strong> The Road Ahead</a></li><li class="chapter-item expanded "><a href="part-8-impact/chapter-38-place-in-history.html"><strong aria-hidden="true">38.</strong> Ethereum&#39;s Place in History</a></li><li class="chapter-item expanded affix "><li class="part-title">Appendices</li><li class="chapter-item expanded "><a href="appendices/appendix-a-specifications.html"><strong aria-hidden="true">39.</strong> Technical Specifications Timeline</a></li><li class="chapter-item expanded "><a href="appendices/appendix-b-economic.html"><strong aria-hidden="true">40.</strong> Economic History</a></li><li class="chapter-item expanded "><a href="appendices/appendix-c-key-figures.html"><strong aria-hidden="true">41.</strong> Key Figures and Contributors</a></li><li class="chapter-item expanded "><a href="appendices/appendix-d-resources.html"><strong aria-hidden="true">42.</strong> Resources for Further Learning</a></li><li class="chapter-item expanded affix "><a href="glossary.html">Glossary</a></li><li class="chapter-item expanded affix "><a href="index.html">Index</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
