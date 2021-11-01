import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-1", "Obstagolf", "img/projects/Obstagolf3.jpeg", 
    `
    <div class="paragraph">
     <strong>Obstagolf</strong> is a multiplayer golf game which you can play with 2 players online.
    </div>
    <div class="paragraph center">
        <img class="banner" src="img/projects/Final-prototype.jpeg" alt="Obstagolf" />
    </div>

    <div class="paragraph">
    My project group and I have created the game using Unity and the 
    assets were created by 3 group members in year 2 block 1. I was 
    the only programmer for this project.<br> I used <strong>Photon Unity Network</strong>
    to enable online turn-based golf gameplay and had to use 3D rigging in
    order to make sure everything would have the right size and be
    restrained within the range of the ball using C#.
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/intro_screen.png" alt="Obstagolf" />
        <img class="phone-screenshot" src="img/projects/first_ite.png" alt="Obstagolf" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Herbalist", "img/projects/herbalist4.png", `
    <div class="paragraph">
        <strong>Herbalist</strong> is a Serious Game in VR designed for people with
        acrophobia. The player is tasked with collecting rare flowers in order 
        to save the village.
    </div>
    <div class="paragraph center">
    <img class="banner" src="img/projects/herbalist2.png" alt="Herbalist" />
    </div>

    <div class="paragraph"> All the code was
    written using Visual Studio Code and designed for the HTC Vive, with the movement
    being controlled by touch, meaning that users won't have to press a button to move
    and flowers can be picked up by either trigger on the back side of the controllers.
    The game is
    designed for people with acrophobia (fear of heights) in order to 
    help them get a bit used to height through VR therapy. Each 
    level increases the height of the position of the flower. It is designed 
    in such a way that the player can go back to a safe room at any 
    moment in order to relax in case it becomes too 
    demanding for them.
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/herbalist.png" alt="Herbalist" />
    <img class="pc-screenshot" src="img/projects/herbalist5.png" alt="Herbalist" />
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Police AR", "img/projects/PoliceAR_start.png", `
    <div class="paragraph">
        <strong>Police AR</strong> is an application designed for the Dutch Police Force for shoot training.
    </div>
    <div class="paragraph center">
    <img class="banner" src="img/projects/PoliceAR_start2.png" alt="PoliceAR" />
    </div>

    <div class="paragraph">
    This was done with our client being the Dutch Police force, we kept in close touch with them and
    had weekly meetings with them so they could tell us what they wanted in the application.
    </div>

    <div class="paragraph">
        The application was supposed to be built for AR glasses, but because
        of the pandemic we had to scrap that idea and instead started developing
        for smartphones instead. I have used Unity's Mixed Reality Tool Kit for this
        in order to get it working with the camera on smartphones.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Instantiate a building when tapping the overworld</li>
        <li>Shoot floating disks</li>
        <li>Track shot accuracy</li>
        <li>Dodge incoming projectiles</li>
        </ul>
    </div>
    `, "#383838")
];