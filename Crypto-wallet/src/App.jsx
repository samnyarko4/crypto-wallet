import { useState } from 'react'
import usericon from './assets/usericon.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, NavLink } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className='main-grid'>
        <div className='sidebar grid grid-rows-3'>

          <div>
        <h1 className='site-title'> 
          Krypto <span className='site-title-color'>Link</span>
        </h1>
        <nav className='main-nav'>
          <ul>
            <li>
              <a href="" className='button-grid btn-active'>
              <i class="fa-solid fa-grip mr-4"></i>
                <p>
                Dashboard
                </p>
                </a>
            </li>

            <li>
              <NavLink className='button-grid' to="/market">
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

            <h2 className='main-content-title'>Dashboard</h2>

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

          <div className='main-display grid grid-cols-2'>
            <div className=' grid grid-rows-3 main-left'>
              <div className='wallet-value-view'>
            <p className='asset-value'>Total asset value</p>
            <h3 className='asset-number'>$ 100,000.34 <span><i class="fa-solid fa-eye-slash"></i></span></h3>
            <p>- 12.7364 BTC</p>
              </div>

              <div className='market-widget'>
                <h1 className='widget-title'>Market Overview</h1>
              </div>

              <div className='transaction-widget'>
                <h1 className='widget-title'>Transactions</h1>
              </div>
            </div>

            <div className="main-right grid">

              {/* ------------------------------------------------------
                              ASSET GRID
                ----------------------------------------------------- */}
              <div className='assets grid'>
                <h2>Assets</h2>
                <h3>See All</h3>

                <div className='asset-widget'> 
                <section className='flex'>
                <img src={usericon} alt="" />
                  <h4>BTC</h4>
                  </section>
                  <p>$24,300.40</p>
                  <p className='asset-marker'><i class="fa-solid fa-caret-down"></i> 1.2%</p>
                </div>

                <div className='asset-widget'> 
                <section className='flex'>
                <img src={usericon} alt="" />
                  <h4>UST</h4>
                  </section>
                  <p>$13,400.20</p>
                  <p className='asset-marker'><i class="fa-solid fa-caret-down"></i> 0.4%</p>
                </div>

                <div className='asset-widget'> 
                <section className='flex'>
                <img src={usericon} alt="" />
                  <h4>ETH</h4>
                  </section>
                  <p>$4,000.80</p>
                  <p className='asset-marker'><i class="fa-solid fa-caret-down"></i> 3.4%</p>
                </div>

                <div className='asset-widget'> 
                <section className='flex'>
                <img src={usericon} alt="" />
                  <h4>CAR</h4>
                  
                </section>
                  <p>$1,900.10</p>
                  <p className='asset-marker'><i class="fa-solid fa-caret-down"></i> 0.3%</p>
                </div>
              </div>

              {/* ----------------------------------------------------
                                       OPERATION WIDGET
                --------------------------------------------------- */}
            <div className='grid operation-widget'>
              <section className='grid operations-nav'>
              <h3 >Operation</h3>

                <span className='operation-btns flex'>
              <button className='active'>Buy</button>
              <button>Sell</button>
              <button>Exchange</button>
                </span>
              </section>

              <section className='operation-pay'>
                <p>You pay</p>
                <span className='flex pay-crypto'>

                <select name="crypto" id="crypto">
                    <option value="bitcoin">BTC</option>
                    <option value="ust">UST</option>
                    <option value="etherium">ETH</option>
                    <option value="cardano">CAR</option>
                </select>

                <span className='flex'>

                <p className='mr-12 pay-amount'>0</p>
                <button>
                  Max
                </button>
                </span>
                </span>
                <i class="fa-solid fa-up-down pt-3"></i>
                <span>
                <p>You Get</p>
                <span className='flex pay-crypto'>

                <select name="crypto" id="crypto">
                    <option value="bitcoin">BTC</option>
                    <option value="ust">UST</option>
                    <option value="etherium">ETH</option>
                    <option value="cardano">CAR</option>
                </select>

                <span className='flex'>

                <p className='mr-12 pay-amount'>0</p>
                <button>
                  Max
                </button>
                </span>
                </span>
                </span>

                <p>1 BTC = $2,345</p>

                <button className='purchase-btn'>Buy Bitcoin</button>
              </section>
            </div>


            </div>

          </div>
        </div>

       </div>
  )
}

export default App
