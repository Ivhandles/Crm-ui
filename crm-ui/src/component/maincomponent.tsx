import { Divider, Switch } from 'antd'
import AddFileIcon from '../assets/Icons/AddFileIcon'
import AddUserIcon from '../assets/Icons/AddUserIcon'
import CallerIcon from '../assets/Icons/CallerIcon'
import DropdownIcon from '../assets/Icons/DropdownIcon'
import HourGlassIcon from '../assets/Icons/HourGlassIcon'
import HuluIcon from '../assets/Icons/HuluIcon'
import ImageIcon from '../assets/Icons/ImageIcon'
import './maincomponent.scss'
import BotIcon from '../assets/Icons/BotIcon'
import SpeakerIcon from '../assets/Icons/SpeakerIcon'
import SearchIcon from '../assets/Icons/SearchIcon'
import { useState } from 'react'
import UserIcon from '../assets/Icons/UserIcon'
import DownwardIcon from '../assets/Icons/DownwardIcon'
import AmazonIcon from '../assets/Icons/AmazonIcon'
import AutoPayIcon from '../assets/Icons/AutoPayIcon'
import MSwipeIcon from '../assets/Icons/MSwipeIcon'

function maincomponent() {
  const [searchActive] = useState(false)
  const [username] = useState('Natasha')
  return (
    <div className="main-div">
      <div className="sidebar-div">
        <div className="sidebar-first-content-div">
          <div>
            <HuluIcon />
          </div>
          <div className="first-text-styles">Hulu Bank</div>
        </div>
        <div className="sidebar-second-content-div">
          <div>
            <CallerIcon />
          </div>
          <div className="second-content-text-div">
            ID : 1234-ABCD
            <div>
              <DropdownIcon />
            </div>
          </div>
        </div>

        <div className="sidebar-third-content-div">
          <div className="third-content-text-div">Quick Access</div>
          <div className="third-content-icons-div">
            <div>
              <AddFileIcon />
            </div>
            <div>
              <AddUserIcon />
            </div>
            <div>
              <HourGlassIcon />
            </div>
            <div>
              <ImageIcon />
            </div>
          </div>
        </div>
        <Divider />

        <div className="helper-bot-div">
          <div className="helper-bot-text">
            ...........................................................
          </div>
          <div className="helper-bot-inner-container">
            <div className="helper-bot-sender-info">
              <div className="helper-bot-sender-info-img">
                <BotIcon />
              </div>
              <div className="helper-bot-sender-details">
                <div className="helper-bot-send-by">Send By</div>
                <div className="helper-bot-name">Helper Bot</div>
              </div>
            </div>
            <div className="helper-bot-indicator">
              <Switch />
            </div>
          </div>
          <div className="helper-bot-text">
            ...........................................................
          </div>
        </div>

        <div className="user-info-div">
          <div className="username-div"> Mr. Tony Stark</div>
          <div className="time-div">03:47pm</div>
        </div>
        <div className="user-msg-div">
          <p className="user-msg-text-div">Hey there ..</p>
          <p className="user-msg-text-div">
            Not happy with your credit card services as I am not getting loyalty points since last 3
            months.
          </p>
        </div>
        <div className="user-msg-div-2">
          <p className="user-msg-text-div-2">
            and also I want to change my name on my credit card as it is got misprinted.
          </p>
        </div>

        <div className="msg-input-container">
          <input className="msg-input-container-text" placeholder="Please Enter your message" />
          <div className="msg-input-container-img">
            <SpeakerIcon />
          </div>
        </div>
      </div>
      <div className="content-div">
        <div className="head-search-container">
          <div className="head-img-container ">
            <SearchIcon />
          </div>

          <input
            type="text"
            placeholder="Type search parameter (Account, CTN, BAN etc.)"
            className={`head-text-container ${searchActive ? 'search-active' : ''}`}
            style={{ color: searchActive ? 'black' : 'white' }}
          />

          <div className="head-user-container">
            <div>
              <UserIcon />
            </div>
            <div className="head-username-text">{username}</div>
          </div>
        </div>
        <div className="sub-data-container">
          <div className="sub-data-inner-container">
            <div className="sub-data-gap-container">
              <div className="line"></div>
              <div className="sub-dataleft-content">
                <div className="left-image-container">
                  <div className="left-user-text">Mr. John Stanely</div>
                  <div className="downward-icon-styles">
                    <DownwardIcon />
                  </div>
                </div>
                <div className="left-text-container">
                  <div className="left-subtext">ACC: 234891389</div>
                  <div className="tag-lc">LOYAL CUSTOMER</div>
                </div>
              </div>
              <div className="tag-fc">FREQUENT CALLER</div>
              <div className="sub-data-right-container">
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="currency">$</div>
                    <div className="value">190</div>
                  </div>
                  <div className="description">Amount Due</div>
                </div>
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="currency">$</div>
                    <div className="value">25</div>
                  </div>
                  <div className="description">Due Immediately</div>
                </div>
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="value">03</div>
                  </div>
                  <div className="description">Due Days Left</div>
                </div>
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="value">04</div>
                  </div>
                  <div className="description">Active Lines</div>
                </div>
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="value"><MSwipeIcon/></div>
                  </div>
                  <div className="description">mSwipe</div>
                </div>
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="value"><AutoPayIcon/></div>
                  </div>
                  <div className="description">AutoPay</div>
                </div>
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="value">0</div>
                  </div>
                  <div className="description">Open Cases</div>
                </div>
                <div className="sub-data-right-item">
                  <div className="amount">
                    <div className="value">
                      <AmazonIcon />
                    </div>
                  </div>
                  <div className="description">amazon</div>
                </div>
              </div>
              
</div>
<div className="custom-container">
  <div className="custom-flex">
    <div className="custom-item custom-flex-col">
      <div className="inner-item">
        <div className="container">
          <div className="title">Contact Details</div>
          <div className="content">
            <div className="info">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7bd470e09e70b0a324753206b688e5c0220f53020270630c394a97ef65551eb?apiKey=ebc80f033136493da2640672a3707428&" alt="Email" />
              <span className="label">John.stanely@starkvalue.com</span><br />
              10880 Malibu Point, 90265,<br />
              California, USA
            </div>
          </div>
        </div>
      </div>
      <div className="inner-item">
        <div className="container">
          <div className="title">Contact Details</div>
          <div className="content">
            <div className="info">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7bd470e09e70b0a324753206b688e5c0220f53020270630c394a97ef65551eb?apiKey=ebc80f033136493da2640672a3707428&" alt="Email" />
              <span className="label">John.stanely@starkvalue.com</span><br />
              10880 Malibu Point, 90265,<br />
              California, USA
            </div>
          </div>
        </div>
      </div>
      <div className="inner-item">
        <div className="container">
          <div className="title">Contact Details</div>
          <div className="content">
            <div className="info">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7bd470e09e70b0a324753206b688e5c0220f53020270630c394a97ef65551eb?apiKey=ebc80f033136493da2640672a3707428&" alt="Email" />
              <span className="label">John.stanely@starkvalue.com</span><br />
              10880 Malibu Point, 90265,<br />
              California, USA
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="links">
      <div className="link">Setup Auto Pay</div>
      <div className="link">Set Up QuickPay</div>
      <div className="link">Bill Pay Methods</div>
      <div className="link">Suspend & Restore Service</div>
      <div className="link">Charges & Fees</div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>

        <footer className="footer-styles">thus is footer</footer>
      </div>
   
  )
}

export default maincomponent
