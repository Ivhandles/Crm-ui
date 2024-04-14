import { Divider } from 'antd'
import AddFileIcon from '../assets/Icons/AddFileIcon'
import AddUserIcon from '../assets/Icons/AddUserIcon'
import CallerIcon from '../assets/Icons/CallerIcon'
import DropdownIcon from '../assets/Icons/DropdownIcon'
import HourGlassIcon from '../assets/Icons/HourGlassIcon'
import HuluIcon from '../assets/Icons/HuluIcon'
import ImageIcon from '../assets/Icons/ImageIcon'
import './maincomponent.scss'

function maincomponent() {
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

        <div className="flex-container">
  <div className="text">
    ...........................................................
  </div>
  <div className="inner-container">
    <div className="sender-info">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cbb8f758ea5f4b7c207fe080d441f789746e311d710fa240ab843ffbe4fd2cc?apiKey=ebc80f033136493da2640672a3707428&"
        alt="Sender Icon"
      />
      <div className="sender-details">
        <div className="send-by">Send By</div>
        <div className="bot-name">Helper Bot</div>
      </div>
    </div>
    <div className="indicator">
      <div className="indicator-bar"></div>
    </div>
  </div>
  <div class="text">
    ...........................................................
  </div>
</div>


      </div>
      <div className="content-div">eew</div>
    </div>
  )
}

export default maincomponent
