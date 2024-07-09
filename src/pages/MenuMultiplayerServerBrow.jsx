import SideMenuGames from "../components/SideMenuGames";
import SideMenuOther from "../components/SideMenuOther";
import TypesideMenuHelpWrapper from "../components/TypesideMenuHelpWrapper";
import SideMenuMisc from "../components/SideMenuMisc";
import Invite from "../components/Invite";
import BrowserSINext1 from "../components/BrowserSINext1";
import BrowserSINext from "../components/BrowserSINext";
import StateDefault from "../components/StateDefault";
import BrowserSIButtons from "../components/BrowserSIButtons";
import styles from "./MenuMultiplayerServerBrow.module.css";

const MenuMultiplayerServerBrow = () => {
  return (
    <div className={styles.menuMultiplayerServerBrow}>
      <div className={styles.wrapperMenuBackground}>
        <img
          className={styles.menuBackgroundIcon}
          alt=""
          src="/menu--background@2x.png"
        />
      </div>
      <div className={styles.menuDarkerBg} />
      <div className={styles.sideMenu}>
        <div className={styles.sideMenuLine} />
        <SideMenuGames />
        <SideMenuOther />
        <div className={styles.sideMenuMisc}>
          <TypesideMenuHelpWrapper
            typesideMenuHelpWrapperPosition="absolute"
            typesideMenuHelpWrapperTop="0px"
            typesideMenuHelpWrapperLeft="0px"
          />
          <SideMenuMisc />
        </div>
      </div>
      <Invite />
      <div className={styles.browserSiNextW}>
        <BrowserSINext1
          browserSINextImageW="/browser--sinextimagew@2x.png"
          dawnbreaker="dawnbreaker"
        />
        <BrowserSINext1
          browserSINextImageW="/browser--sinextimagew1@2x.png"
          dawnbreaker="propaganda"
          propLeft="352px"
        />
        <BrowserSINext
          browserSINextImageW="/browser--sinextimagew2@2x.png"
          dawnbreaker="operation locker"
        />
        <BrowserSINext
          browserSINextImageW="/browser--sinextimagew3@2x.png"
          dawnbreaker="lancang dam"
        />
      </div>
      <div className={styles.mapRotation}>map rotation</div>
      <div className={styles.menuMultiplayerServerBrowChild} />
      <div className={styles.browserSiSettingsW}>
        <div className={styles.browserSiRules}>
          <div className={styles.rules}>rules</div>
          <div className={styles.browserSiTickersW}>
            <div className={styles.browserSiTickers}>
              <div className={styles.tickets}>tickets</div>
              <div className={styles.div}>400</div>
            </div>
            <div className={styles.browserSiTickersWChild} />
          </div>
          <div className={styles.browserSiVehiclesW}>
            <div className={styles.browserSiVehicles}>
              <div className={styles.vehicleSpawnDelay}>
                vehicle spawn delay
              </div>
              <div className={styles.div1}>25</div>
            </div>
            <div className={styles.browserSiVehiclesWChild} />
          </div>
          <div className={styles.browserSiBulletW}>
            <div className={styles.browserSiBullet}>
              <div className={styles.bulletDamage}>bullet damage</div>
              <div className={styles.div2}>100</div>
            </div>
            <div className={styles.browserSiBulletWChild} />
          </div>
          <div className={styles.browserSiKicktW}>
            <div className={styles.browserSiKickt}>
              <div className={styles.kickAfterTeam}>kick after team kills</div>
              <div className={styles.div3}>5</div>
            </div>
            <div className={styles.browserSiKicktWChild} />
          </div>
          <div className={styles.browserSiHealthW}>
            <div className={styles.browserSiHealth}>
              <div className={styles.playerHealth}>player health</div>
              <div className={styles.div4}>100</div>
            </div>
            <div className={styles.browserSiHealthWChild} />
          </div>
          <div className={styles.browserSiRespawnW}>
            <div className={styles.browserSiRespawn}>
              <div className={styles.playerRespawnTime}>
                player respawn time
              </div>
              <div className={styles.div5}>100</div>
            </div>
            <div className={styles.browserSiRespawnWChild} />
          </div>
          <div className={styles.browserSiKickiW}>
            <div className={styles.browserSiKicki}>
              <div className={styles.kickAfterIdle}>kick after idle</div>
              <div className={styles.div6}>300</div>
            </div>
            <div className={styles.browserSiKickiWChild} />
          </div>
          <div className={styles.browserSiBanW}>
            <div className={styles.browserSiBan}>
              <div className={styles.banAfterKicks}>ban after kicks</div>
              <div className={styles.div7}>3</div>
            </div>
            <div className={styles.browserSiBanWChild} />
          </div>
        </div>
        <div className={styles.browserSiAdvanced}>
          <div className={styles.advanced}>advanced</div>
          <div className={styles.browserSiMinimapW}>
            <div className={styles.browserSiMinimap}>
              <div className={styles.minimap}>minimap</div>
              <div className={styles.on}>on</div>
            </div>
            <div className={styles.browserSiMinimapWChild} />
          </div>
          <div className={styles.browserSiSquadW}>
            <div className={styles.browserSiSquad}>
              <div className={styles.onlySquadLeader}>
                only squad leader spawn
              </div>
              <div className={styles.off}>off</div>
            </div>
            <div className={styles.browserSiSquadWChild} />
          </div>
          <div className={styles.browserSiVehiclesW1}>
            <div className={styles.browserSiVehicles1}>
              <div className={styles.vehicles}>vehicles</div>
              <div className={styles.on1}>on</div>
            </div>
            <div className={styles.browserSiVehiclesWItem} />
          </div>
          <div className={styles.browserSiBalanceW}>
            <div className={styles.browserSiBalance}>
              <div className={styles.teamBalance}>team balance</div>
              <div className={styles.on2}>on</div>
            </div>
            <div className={styles.browserSiBalanceWChild} />
          </div>
          <div className={styles.browserSiMinimapsW}>
            <div className={styles.browserSiMinimaps}>
              <div className={styles.minimapSpotting}>minimap spotting</div>
              <div className={styles.on3}>on</div>
            </div>
            <div className={styles.browserSiMinimapsWChild} />
          </div>
          <div className={styles.browserSiHudW}>
            <div className={styles.browserSiHud}>
              <div className={styles.hud}>hud</div>
              <div className={styles.on4}>on</div>
            </div>
            <div className={styles.browserSiHudWChild} />
          </div>
          <div className={styles.browserSiVehiclecamW}>
            <div className={styles.browserSiVehiclecam}>
              <div className={styles.pVehicleCam}>3p vehicle cam</div>
              <div className={styles.on5}>on</div>
            </div>
            <div className={styles.browserSiVehiclecamWChild} />
          </div>
          <div className={styles.browserSiRegenerateW}>
            <div className={styles.browserSiRegenerate}>
              <div className={styles.regenerativeHealth}>
                regenerative health
              </div>
              <div className={styles.on6}>on</div>
            </div>
            <div className={styles.browserSiRegenerateWChild} />
          </div>
          <div className={styles.browserSiKillcamW}>
            <div className={styles.browserSiKillcam}>
              <div className={styles.killCam}>kill cam</div>
              <div className={styles.on7}>on</div>
            </div>
            <div className={styles.browserSiKillcamWChild} />
          </div>
          <div className={styles.browserSiFriendlyW}>
            <div className={styles.browserSiFriendly}>
              <div className={styles.friendlyFire}>friendly fire</div>
              <div className={styles.off1}>off</div>
            </div>
            <div className={styles.browserSiFriendlyWChild} />
          </div>
          <div className={styles.browserSiSpottingW}>
            <div className={styles.browserSiSpotting}>
              <div className={styles.dSpotting}>3d spotting</div>
              <div className={styles.on8}>on</div>
            </div>
            <div className={styles.browserSiSpottingWChild} />
          </div>
          <div className={styles.browserSiEnemyW}>
            <div className={styles.browserSiEnemy}>
              <div className={styles.enemyNameTags}>enemy name tags</div>
              <div className={styles.on9}>on</div>
            </div>
            <div className={styles.browserSiEnemyWChild} />
          </div>
        </div>
        <div className={styles.browserSiSettings}>
          <div className={styles.settings}>settings</div>
          <StateDefault
            stateDefaultPosition="absolute"
            stateDefaultTop="32.8px"
            stateDefaultLeft="0.2px"
          />
          <div className={styles.browserSiPunkbusterW}>
            <div className={styles.browserSiPunkbuster}>
              <div className={styles.punkbuster}>punkbuster</div>
              <div className={styles.on10}>on</div>
            </div>
            <div className={styles.browserSiPunkbusterWChild} />
          </div>
          <div className={styles.browserSiFairfightW}>
            <div className={styles.browserSiFairfight}>
              <div className={styles.fairfight}>fairfight</div>
              <div className={styles.on11}>on</div>
            </div>
            <div className={styles.browserSiFairfightWChild} />
          </div>
          <div className={styles.browserSiPasswordW}>
            <div className={styles.browserSiPassword}>
              <div className={styles.password}>password</div>
              <div className={styles.off2}>off</div>
            </div>
            <div className={styles.browserSiPasswordWChild} />
          </div>
          <div className={styles.browserSiPresetW}>
            <div className={styles.browserSiPreset}>
              <div className={styles.preset}>preset</div>
              <div className={styles.normal}>normal</div>
            </div>
            <div className={styles.browserSiPresetWChild} />
          </div>
        </div>
      </div>
      <div className={styles.browserSiCurrentStats}>
        <div className={styles.browserSiPing}>
          <div className={styles.ms}>47ms</div>
          <div className={styles.ping}>ping</div>
        </div>
        <div className={styles.browserSiPlayers}>
          <div className={styles.div8}>64/64</div>
          <div className={styles.players}>players</div>
        </div>
        <div className={styles.browserSiTickrate}>
          <div className={styles.hz}>60 Hz</div>
          <div className={styles.tickrate}>tickrate</div>
        </div>
      </div>
      <BrowserSIButtons />
      <div className={styles.browserSiIntro}>
        <div className={styles.serverProtectedByContainer}>
          <p className={styles.serverProtectedBy}>
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
            Request, Appeal, Visit us: www.epg.gg | Discord
          </p>
          <p className={styles.httpsdiscordgg3r5nk4d}>
            https://discord.gg/3r5NK4d
          </p>
        </div>
        <div className={styles.browserSiInfo}>
          <div className={styles.conquestLarge}>
            conquest large - siege of shanghai - normal - 40 hz
          </div>
          <img
            className={styles.germanyFlagIcon}
            alt=""
            src="/germanyflag.svg"
          />
        </div>
        <div className={styles.nasaNoobs}>
          #1| NASA | Noobs Welcome | Conquest 40Hz
        </div>
      </div>
      <div className={styles.browserBreadcrumb}>
        <button className={styles.serverInfo}>server info</button>
        <div className={styles.browserBreadcrumbPrevious}>
          <div className={styles.browserBreadcrumbPrevious1}>
            <button className={styles.multiplayer}>multiplayer</button>
          </div>
          <button className={styles.serverBrowser}>server browser</button>
          <div className={styles.div9}>/</div>
          <div className={styles.div10}>/</div>
          <button className={styles.back}>
            <img className={styles.backIcon} alt="" src="/back.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuMultiplayerServerBrow;
