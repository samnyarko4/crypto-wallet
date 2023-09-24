import { NavLink } from "react-router-dom"
import usericon from '../assets/usericon.jpg'
function Market () {
    return(
        <div className='main-grid'>
        <div className='sidebar grid grid-rows-3'>

          <div>
        <h1 className='site-title'> 
          Krypto <span className='site-title-color'>Link</span>
        </h1>
        <nav className='main-nav'>
          <ul>
            <li>
              <NavLink className='button-grid ' to='/'>
              <i class="fa-solid fa-grip mr-4"></i>
                <p>
                Dashboard
                </p>
                </NavLink>
            </li>

            <li>
              <NavLink className='button-grid btn-active' to="/market">
                <i class="fa-solid fa-chart-line mr-4" ></i>
                <p>
                Market
                </p>
                </NavLink>
            </li>

            <li>
              <a href="" className='button-grid'>
                <i class="fa-solid fa-wallet mr-4"></i>
                <p>
                Wallet
                </p>
                </a>
            </li>

            <li>
              <a href="" className='button-grid'>
                <i class="fa-solid fa-right-left mr-4"></i>
                <p>
                Transaction
                </p>
                  </a>
            </li>

            <li>
              <a href="" className='button-grid'
              ><i class="fa-solid fa-users mr-4"></i>
              <p>
              Community
              </p>
              </a>
            </li>

            <li>
              <a href="" className='button-grid'>
                <i class="fa-solid fa-gear mr-4"></i>
                <p>
                Setting
                </p>
                </a>
            </li>
          </ul>
        </nav>
          </div>

          <div className='second-main-nav'>
            <ul>
              <li>
                <a href="" className='button-grid smn-btn'>
                  <i class="fa-solid fa-circle-question mr-4"></i>
                  <p>
                  Support
                  </p>
                  </a>
              </li>

              <li>
                <a href="" className='button-grid smn-btn'>
                  <i class="fa-solid fa-circle-info mr-4"></i>
                  <p>
                    Feedback
                    </p>
                  </a>
              </li>
            </ul>
          </div>
          
          <div className='themecontrol'>
            <button >Light</button>
            <button>Dark</button>
          </div>
        </div>

        <div className='main-content' >

<div className='main-content-nav'>

  <h2 className='main-content-title'>Market</h2>

  <div className='options'>
    <div className='searcbar'>

    <i class="fa-solid fa-magnifying-glass  magnifying-glass"></i>
  <input type="text" name="search" id="search" placeholder='Search...' className='pl-8' />
    </div>

  <i class="fa-regular fa-bell noti-icon"></i>

  <button className='flex userbutton'>
    <img src={usericon} alt="" className='usericon'/>
    <p className='username'>Samuel</p>
    <i class="fa-solid fa-angle-down userdrop"></i>
    </button>
  </div>
</div>

        <div className="market-display grid ">

        <div className="top-performers grid grid-cols-4 gap-5">
            <div className="market-card">
                <span className="flex items-center">

                <img src={usericon} alt="" className="market-card-img" />
                <span className="text-left pl-5 card-title">

                <h3>Best Selling</h3>
                <h2>Bitcoin</h2>
                </span>
                </span>
            

                <section className="grid grid-cols-2">
                    <p className="market-card-price">15730.50 <span className="market-card-price-name">ETH</span></p>
                    <p className="performance-ind">34.23 <i class="fa-solid fa-arrow-trend-up"></i></p>
                </section>
            </div>


            <div className="market-card">
                <span className="flex items-center">

                <img src={usericon} alt="" className="market-card-img" />
                <span className="text-left pl-5 card-title">

                <h3>Best Selling</h3>
                <h2>Bitcoin</h2>
                </span>
                </span>
            

                <section className="grid grid-cols-2">
                    <p className="market-card-price">15730.50 <span className="market-card-price-name">ETH</span></p>
                    <p className="performance-ind">34.23 <i class="fa-solid fa-arrow-trend-up"></i></p>
                </section>
            </div>



            <div className="market-card">
                <span className="flex items-center">

                <img src={usericon} alt="" className="market-card-img" />
                <span className="text-left pl-5 card-title">

                <h3>Best Selling</h3>
                <h2>Bitcoin</h2>
                </span>
                </span>
            

                <section className="grid grid-cols-2">
                    <p className="market-card-price">15730.50 <span className="market-card-price-name">ETH</span></p>
                    <p className="performance-ind">34.23 <i class="fa-solid fa-arrow-trend-up"></i></p>
                </section>
            </div>

            <div className="market-card">
                <span className="flex items-center">

                <img src={usericon} alt="" className="market-card-img" />
                <span className="text-left pl-5 card-title">

                <h3>Best Selling</h3>
                <h2>Bitcoin</h2>
                </span>
                </span>
            

                <section className="grid grid-cols-2">
                    <p className="market-card-price">15730.50 <span className="market-card-price-name">ETH</span></p>
                    <p className="performance-ind">34.23 <i class="fa-solid fa-arrow-trend-up"></i></p>
                </section>
            </div>
        </div>
        <div>
            <section className="flex justify-between">

                    <h2 className="text-left position-title">All Positions</h2>

                    <span className="flex conversion">

                    <p className="pr-11 opacity-40"> Total Value= 3422.42</p>
                    <p>1 ETH = $4,234.9374</p>
                    </span>
            </section>

            <div className="market-list ">
        

            <table class="table-auto market-table mt-5 ">
  <thead>
    <tr>
      <th className="text-left">COIN</th>
      <th>LAST PRICE</th>
      <th>CHANGE</th>
      <th>AMOUNT</th>
      <th>VOLUME</th>
      <th>OPERATION</th>
    </tr>
  </thead>
  <tbody className="overflow-auto">
    <tr className="market-list-item   py-5">
        <td className="flex  items-center py-6"><img src={usericon} alt="" /> <span className="px-4 ">Bitcoin</span></td>
        <td>1345.34</td>
        <td>34.25</td>
        <td>234.32</td>
        <td>1.3322.453</td>
        <td><i class="fa-regular fa-star"></i></td>
        </tr>

        <tr className="market-list-item   py-5">
        <td className="flex  items-center py-6"><img src={usericon} alt="" /> <span className="px-4 ">Bitcoin</span></td>
        <td>1345.34</td>
        <td>34.25</td>
        <td>234.32</td>
        <td>1.3322.453</td>
        <td><i class="fa-regular fa-star"></i></td>
        </tr>

        <tr className="market-list-item   py-5">
        <td className="flex  items-center py-6"><img src={usericon} alt="" /> <span className="px-4 ">Bitcoin</span></td>
        <td>1345.34</td>
        <td>34.25</td>
        <td>234.32</td>
        <td>1.3322.453</td>
        <td><i class="fa-regular fa-star"></i></td>
        </tr>

        <tr className="market-list-item   py-5">
        <td className="flex  items-center py-6"><img src={usericon} alt="" /> <span className="px-4 ">Bitcoin</span></td>
        <td>1345.34</td>
        <td>34.25</td>
        <td>234.32</td>
        <td>1.3322.453</td>
        <td><i class="fa-regular fa-star"></i></td>
        </tr>

        <tr className="market-list-item   py-5">
        <td className="flex  items-center py-6"><img src={usericon} alt="" /> <span className="px-4 ">Bitcoin</span></td>
        <td>1345.34</td>
        <td>34.25</td>
        <td>234.32</td>
        <td>1.3322.453</td>
        <td><i class="fa-regular fa-star"></i></td>
        </tr>

        <tr className="market-list-item   py-5">
        <td className="flex  items-center py-6"><img src={usericon} alt="" /> <span className="px-4 ">Bitcoin</span></td>
        <td>1345.34</td>
        <td>34.25</td>
        <td>234.32</td>
        <td>1.3322.453</td>
        <td><i class="fa-regular fa-star"></i></td>
        </tr>

        <tr className="market-list-item   py-5">
        <td className="flex  items-center py-6"><img src={usericon} alt="" /> <span className="px-4 ">Bitcoin</span></td>
        <td>1345.34</td>
        <td>34.25</td>
        <td>234.32</td>
        <td>1.3322.453</td>
        <td><i class="fa-regular fa-star"></i></td>
        </tr>
        </tbody>
        </table>
            </div>
                </div>
        </div>
        </div>
        </div>
        
    )
}
export default Market