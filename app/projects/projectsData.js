import { assets } from '@/assets/assets';
import { play } from '@/app/layout';
import Image from 'next/image';

export const projects = [
    {
        id: 0,
        slug: 'egyptian-ratscrew',
        title: 'Egyptian Ratscrew',
        description: (
            <div>
                <p className={`${play.className} mb-4`}>
                    This was an online multiplayer card game built in Java using the libGDX framework.
                    It was developed over the course of six weeks by a seven-person team for a software engineering class. 
                    The game replicates the fast-paced mechanics of the real-life card game. 
                    It was hosted on a live server for a time but has since been taken down post-submission.
                </p>
            </div>
        ),
        details: (
            <div>
                {/* Image Section */}
                <div className="w-full lg:w-[calc(100%/1.75)] lg:float-right lg:ml-6 mb-4">
                    <Image
                    src={assets.egyptian_ratscrew_image}
                    alt='Egyptian Ratscrew'
                    width={400}
                    height={400}
                    className="w-full shadow-lg"
                    />
                </div>
                {/* Text Section */}
                <div className="text-lg text-gray-700">
                    <p className={`${play.className} mb-4`}>
                        Egyptian Ratscrew is a fast-paced online multiplayer card game developed using Java and libGDX that replicates the chaotic, reflex-based rules of the real-world game, including simultaneous slaps and face card battles. Players join networked lobbies and compete to be the last with cards remaining, slapping in real time when valid patterns appear.
                    </p>
                    <p className={`${play.className} mb-4`}>
                        As the main gameplay programmer, I implemented most of the core logic and all client-side features on top of a teammate’s networking infrastructure. I handled the full turn and slap state machine, designed an event-driven UI using libGDX's scene2d system, and enforced all game rules with strict input validation and rollback-safe transitions. This was my first-ever game project, and learning both Java and libGDX from scratch gave me a crash course in real-time multiplayer systems, rendering frameworks, and clean game architecture. The experience also helped kickstart my broader interest in game development.
                    </p>
        
                    {/* Key Features Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Key Features
                    </h3>
                    <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                        <li>Real-time networked multiplayer for up to 4 players</li>
                        <li>Full rule implementation: face card mechanics, slapping logic, player elimination</li>
                        <li>Clean turn system with shared stack management and client/server sync</li>
                        <li>Responsive UI that updates dynamically with game state</li>
                        <li>Input validation system to prevent illegal moves</li>
                        <li>GitHub for version control and collaborative workflow</li>
                    </ul>
        
                    {/* Technical Details Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Technical Details
                    </h3>
                    <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                        <li><strong>Genre:</strong> Card Game</li>
                        <li><strong>Framework:</strong> libGDX</li>
                        <li><strong>Language:</strong> Java</li>
                        <li><strong>Version Control:</strong> Git</li>
                        <li><strong>Special Skills:</strong> Real-time multiplayer logic, client/server architecture, UI with scene2d</li>
                    </ul>
        
                    {/* Project Demo Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Project Demo
                    </h3>
                    <div className="flex mt-8">
                    <iframe
                        src="https://drive.google.com/file/d/1qatMpmeD6WxhDf1v7Lhlg5GsU8wQirqY/preview"
                        width="533"
                        height="300"
                        allow="autoplay"
                        className="shadow-lg"
                        title="Project Demo"
                    ></iframe>
                </div>
                </div>
            </div>
        ),
        previewImage: assets.egyptian_ratscrew_preview,
        link: '/projects/egyptian-ratscrew',
    },
    {
        id: 1,
        slug: 'draw-the-way',
        title: 'Draw The Way',
        description: (
            <div>
                <p className={`${play.className} mb-4`}>
                    Draw the Way is a 2D puzzle-platformer developed in Unity over four sprints by a two-person team. 
                    Players can draw directly on the screen to create physical objects like platforms, laser-reflecting mirrors, and portals to reach the goal. 
                    Set in a sketchbook world, the game doesn’t take itself too seriously — and that’s part of the charm. 
                    The aesthetic is playful and players are free to draw whatever they like, often leading to funny situations. 
                    The game features three main levels, each with a finish line goal, and all drawings persist unless the level is restarted. 
                    (Though, they may be displayed after beating the game.) 
                    The game is complete and available on itch.io.
                </p>
            </div>
        ),
        details: (
            <div>
                {/* Video Section */}
                <div className="w-full lg:w-[calc(100%/1.7)] lg:float-right lg:ml-6 mb-4">
                    <iframe
                        src="https://drive.google.com/file/d/1UEldD3ksT-u5kplEq37axRzS2KXX9U-E/preview"
                        width="400"
                        height="400"
                        allow="autoplay"
                        className="w-full shadow-lg"
                        title="Draw The Way Demo"
                    ></iframe>
                </div>
                {/* Text Section */}
                <div className="text-lg text-gray-700">
                    <p className={`${play.className} mb-4`}>
                        This was a two-person project developed in Unity across four sprints. 
                        It was my first time working with Unity and learning C#, and I was responsible for building the core gameplay systems, including the drawing mechanic, object instantiation, and game logic. 
                        I implemented all the physics-based interactions from scratch, such as drawing gameobjects, collider generation, laser reflection based on surface normals, and bi-directional portals with velocity preservation.
                    </p>
                    <p className={`${play.className} mb-4`}>
                        The idea behind the game was to combined our shared interests in puzzles and drawing/creativity. 
                        The design embraced a whimsical tone with a sketchbook visual style. 
                        Players could draw freely on the screen, and the game would convert their strokes into physical game objects — whether they were platforms, mirrors, or linked portals. 
                        These drawings persisted throughout each level run, encouraging creativity, improvisation, and sometimes chaotic problem-solving.
                    </p>
                    <p className={`${play.className} mb-4`}>
                        The game was selected for showcase at the USC 2025 Games Expo and remains available to play on itch.io.
                    </p>
        
                    {/* Key Features Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Key Features
                    </h3>
                    <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                        <li>Freeform drawing system with real-time physics (using procedural edge collider and line renderer generation)</li>
                        <li>Player-placed mirrors that reflect laser beams at accurate angles using raycasting</li>
                        <li>Teleportation portals with preserved momentum using quaternions</li>
                        <li>Three main levels, each with a target</li>
                    </ul>
        
                    {/* Technical Details Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Technical Details
                    </h3>
                    <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                        <li><strong>Genre:</strong> Puzzle, Platformer</li>
                        <li><strong>Game Engine:</strong> Unity</li>
                        <li><strong>Language:</strong> C#</li>
                        <li><strong>Version Control:</strong> Perforce</li>
                        <li><strong>Special Skills:</strong></li>
                        <ul className="list-disc list-inside ml-6">
                            <li>Designating tasks and working with a burndown chart</li>
                            <li>Technical presentation</li>
                            <li>Gathering and incorporating playtestest data</li>
                        </ul>
                    </ul>
        
                    {/* Play The Game Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Play The Game!
                    </h3>
                    <div className="flex mt-8">
                        <iframe
                            src="https://itch.io/embed/3178874"
                            height="167"
                            frameBorder="0"
                            width="552"
                            title="Silly Masterpiece by clwangUSC"
                            className="shadow-lg"
                        >
                            <a href="https://clwangusc.itch.io/silly-masterpiece">Silly Masterpiece by clwangUSC</a>
                        </iframe>
                    </div>
                </div>
            </div>
        ),
        previewImage: assets.draw_the_way_preview,
        link: '/projects/draw-the-way',
    },
    {
        id: 2,
        slug: 'portal-clone',
        title: 'Portal Clone',
        description: (
            <div>
                <p className={`${play.className} mb-4`}>
                    This was a solo C++ project built over four labs for a game programming course. 
                    Implemented in a custom engine using SDL and OpenGL, the game replicates core mechanics from Portal, including recursive portal rendering, energy pellet puzzles, turret AI, and a VO system with subtitles. 
                    It features first-person movement, physics-based platforming, portal teleportation, and environment interaction via raycasting and collision detection. 
                </p>
                <p className={`${play.className} mb-4`}>
                    Implementing quaternion-based portal orientation, player teleportation with forward vector transforms, and dynamic portal view matrices required a strong grasp of linear algebra and careful debugging of edge cases. 
                    While it followed the specs, executing every system offered valuable hands-on experience with real-time rendering and gameplay programming.
                </p>
            </div>
        ),
        details: (
            <div className="relative">
                {/* Image Section */}
                <div className="w-full md:w-[calc(100%/2)] md:float-right md:ml-6 mb-4">
                    <Image
                    src={assets.portal_clone_image}
                    alt='Portal Clone'
                    width={400}
                    height={400}
                    className="w-full shadow-lg"
                    />
                </div>
                {/* Text Section */}
                <div className="text-lg text-gray-700">
                    <p className={`${play.className} mb-4`}>
                    The game featured first-person navigation with gravity, platforming, and 3D collision handling. 
                    Players could place blue and orange portals on valid surfaces using raycasting and segment casts, enabling teleportation of both the player and interactable objects. 
                    Quaternion transforms ensured proper orientation and velocity transfer through portals, maintaining a seamless experience.
                    </p>
                    <p className={`${play.className} mb-4`}>
                    Recursive portal rendering was achieved by transforming the player’s camera through the portal's matrix and rendering the view from that perspective.
                    Energy pellet mechanics included timed launchers, catchers, and doors that unlocked when a pellet was caught in the corresponding catccher. 
                    Turrets were stateful AI actors capable of detecting, targeting, and damaging the player using laser beams via raycasting.
                    </p>
                    <p className={`${play.className} mb-4`}>
                        Audio and UI systems included distance-based volume fall-off, an HUD with voiceover subtitles, and directional damage indicators. 
                        VO triggers loaded sequences of audio lines with associated subtitles, optionally opening doors or loading new levels after playback. 
                    </p>
        
                    {/* Key Features Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Key Features
                    </h3>
                    <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                        <li>First-person movement, gravity, and physics-based jumping</li>
                        <li>Blue/orange portal placement using raycasting and segment casts</li>
                        <li>Recursive portal rendering with dynamic camera clipping</li>
                        <li>Portal teleportation preserving forward vector and velocity</li>
                        <li>Energy pellet puzzles with launchers, catchers, and doors</li>
                        <li>Turret AI with search, track, fire, fall, and shutdown states</li>
                        <li>Volume falloff audio system tied to actor distance</li>
                        <li>Voiceover triggers with sequential audio and subtitles</li>
                        <li>HUD damage indicators and player death VO taunts</li>
                        <li>Deterministic input replay system for speedruns/debugging</li>
                    </ul>
        
                    {/* Technical Details Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Technical Details
                    </h3>
                    <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                        <li><strong>Genre:</strong> Puzzle Platformer (First-Person)</li>
                        <li><strong>Engine:</strong> Custom (SDL + OpenGL)</li>
                        <li><strong>Language:</strong> C++</li>
                        <li><strong>Version Control:</strong> Git</li>
                    </ul>
        
                    {/* Project Demo Section */}
                    <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                        Project Demo
                    </h3>
                    <div className="flex mt-8">
                        <iframe
                            src="https://drive.google.com/file/d/1RBknLMzJg-SHAlaWV3dhIefF95W-4kqG/preview"
                            width="533"
                            height="300"
                            allow="autoplay"
                            className="shadow-lg"
                            title="Project Demo"
                        ></iframe>
                    </div>
                </div>
            </div>
        ),
        previewImage: assets.portal_clone_preview,
        link: '/projects/portal-clone',
    },
    {
        id: 3,
        slug: 'heightfield-rendering',
        title: 'Rendering Heightfields',
        description: (
            <div>
                <p className={`${play.className} mb-4`}>
                    This project implements a heightfield renderer using OpenGL and GLSL shaders. 
                    A grayscale JPEG image is interpreted as terrain elevation data and rendered in various geometric modes, mainly points, wireframes, and solid triangles. 
                    The user can rotate, scale, and translate the terrain interactively, and toggle between rendering modes using keyboard input. 
                </p>
                <p className={`${play.className} mb-4`}>
                    In addition to standard rendering, a custom vertex shader provides a smoothing mode that averages each vertex with its neighbors and applies a height-based exponentiation and rescaling. 
                    The user can control these smoothing parameters in real time with key bindings. 
                    Vertex positions and their neighbors are passed in as vertex attributes using separate VBOs.
                </p>
            </div>
        ),
        details: (
            <div className="text-lg text-gray-700">
                {/* Main Text Section */}
                <p className={`${play.className} mb-4`}>
                    To visualize heightmaps, I first parsed grayscale JPEGs into terrain meshes using varying primitive types. Each rendering mode—points, wireframes, triangles—was assigned to a keypress and implemented with distinct VAOs and VBOs to adhere to core profile restrictions. I created additional VBOs to pass in neighbor vertex positions as attributes for use in the smoothing shader mode.
                </p>
                <p className={`${play.className} mb-4`}>
                    The smoothing shader included uniforms for scale and exponent, which users could modify live. 
                    The scale parameter linearly scales the height of the terrain, while the exponent parameter determines the degree applied to the height value (which also affects the final color).
                </p>
        
                {/* Key Features Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Key Features
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li>Interactive terrain navigation (rotate, scale, translate via mouse input)</li>
                    <li>Supports four render modes: points, wireframe, triangles, and smooth-shaded triangles</li>
                    <li>Vertex neighbor smoothing logic implemented in vertex shader</li>
                    <li>Screenshot-based animation capture system</li>
                </ul>

                {/* Extra Credit Features Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Extra Credit Features
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside mb-4`}>
                    <li><strong>Element Arrays:</strong> I used indexed rendering to avoid vertex duplication and reduce memory footprint, particularly for large meshes.</li>
                    <li><strong>Triangle Strip Rendering:</strong> For triangle mode, I used GL_TRIANGLE_STRIP wherever feasible to further reduce redundant geometry.</li>
                    <li><strong>Jet Colormap Mode:</strong> Added an alternate shader-based colormap for height visualization.</li>
                    <li><strong>Wireframe Overlay:</strong> Implemented a combined mode that draws wireframes over solid triangles.</li>
                </ul>
        
                {/* Technical Details Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Technical Details
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li><strong>API:</strong> OpenGL 3.2 Core Profile</li>
                    <li><strong>Language:</strong> C++ and GLSL</li>
                    <li><strong>Special Skills:</strong> VBO/VAO management, writing shaders in HLSL</li>
                </ul>
        
                {/* Project Demo Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Project Demo
                </h3>
                <div className="flex mt-8">
                    <iframe
                        src="https://drive.google.com/file/d/193UmBJC-0IjIFYqjbgtqPMkawJb9Lsey/preview"
                        width="533"
                        height="300"
                        allow="autoplay"
                        className="shadow-lg"
                        title="Project Demo"
                    ></iframe>
                </div>
            </div>
        ),
        previewImage: assets.heightfield_preview,
        link: '/projects/heightfield-rendering',
    },
    {
        id: 4,
        slug: 'rollercoaster-simulation',
        title: 'Rollercoaster Simulation',
        description: (
            <div>
                <p className={`${play.className} mb-4`}>
                    This is a 3D roller coaster simulation using Catmull-Rom splines and shader-based OpenGL rendering. 
                    The track is defined by a sequence of control points loaded from external spline files, and a camera smoothly animates along it in a first-person view.
                    The roller coaster rail is rendered as a geometric mesh using triangle strips  and shaded with a Phong lighting shader. 
                    Simultaneously, the scene includes a textured ground plane rendered with a second shader, demonstrating multi-shader rendering in a single OpenGL scene.
                </p>
            </div>
        ),
        details: (
            <div className="text-lg text-gray-700">
                {/* Main Text Section */}
                <p className={`${play.className} mb-4`}>
                    A Catmull-Rom spline defined the track’s geometry, while the ride camera moved along it with correct orientation using tangent, normal, and binormal vectors. 
                    The rail geometry was rendered using triangle strips and a ground plane was rendered undeneath the rollercoaster.
                </p>
        
                {/* Key Features Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Key Features
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li>Spline-based rail track using Catmull-Rom interpolation</li>
                    <li>First-person ride camera with tangent-aligned orientation</li>
                    <li>Triangle-strip mesh generation of roller coaster rail</li>
                    <li>Dual shader programs for lighting (Phong) and textured ground</li>
                    <li>Phong shading with directional light on rail geometry</li>
                    <li>Textured terrain and animated ride experience</li>
                    <li>Animation output via frame-by-frame screenshots</li>
                </ul>
        
                {/* Extra Credit Features Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Extra Credit Features
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside mb-4`}>
                    <li><strong>Element Arrays and triangle Strip Rendering:</strong> Building on the heighfiled project, I already had these implemented, though indexing the rails with triangle strips proved very difficult.</li>
                    <li><strong>T-Shaped Rail Cross-Section:</strong> Initially rendered as just a rectangle, I further added a T-shaped cross-section to the rail geometry.</li>
                    <li><strong>Double rails:</strong> Initially rendered as a single rail underneath the camera, I further created two parallel rails below the camera on either side.</li>
                    <li><strong>Heightfield Renderer:</strong> I reused the heightfield renderer from the previous project to render the ground plane.</li>
                    <li><strong>Colorfield-based Ground Shading:</strong> I used a colorfield to shade the ground plane in the vertex shader.</li>
                </ul>
        
                {/* Technical Details Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Technical Details
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li><strong>API:</strong> OpenGL 3.2 Core Profile</li>
                    <li><strong>Language:</strong> C++ and GLSL</li>
                    <li><strong>Special Skills:</strong> Spline math, writing shaders in HLSL, animation (by moving camera)</li>
                </ul>
        
                {/* Project Demo Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Project Demo
                </h3>
                <div className="flex mt-8">
                    <iframe
                        src="https://drive.google.com/file/d/1wXh_OHoVrqPKkJTDbJFMWSMk1lX4v7Sc/preview"
                        width="533"
                        height="300"
                        allow="autoplay"
                        className="shadow-lg"
                        title="Project Demo"
                    ></iframe>
                </div>
            </div>
        ),
        previewImage: assets.rollercoaster_preview,
        link: '/projects/rollercoaster-simulation',
    },
    {
        id: 5,
        slug: 'ray-tracing',
        title: 'Simple Ray Tracing',
        description: (
            <div>
                <p className={`${play.className} mb-4`}>
                    This is a basic CPU ray tracer capable of rendering 3D scenes composed of triangles and spheres with lighting and shadows.
                    The ray tracer supports Phong shading, interpolated vertex normals, per-light visibility via shadow rays, and global ambient lighting.
                    It renders still images at 640×480 resolution using a camera with a fixed field of view.
                    The entire pipeline was implemented on the CPU without shaders or OpenGL rendering logic, apart from final image display.
                    This project demonstrated core principles of ray casting, geometric intersection, and physically based lighting models.
                </p>
            </div>
        ),
        details: (
            <div className="text-lg text-gray-700">
                {/* Main Text Section */}
                <p className={`${play.className} mb-4`}>
                    The ray tracer was built in C++, using a custom pipeline to simulate realistic lighting. 
                    Rays were traced backward from each pixel to compute intersections with spheres and triangles, where lighting was evaluated using the Phong reflection model.
                    Vertex attributes such as normals and material properties were interpolated using barycentric coordinates, allowing for smooth shading on triangles. 
                    Shadow rays were used to compute per-light occlusion. 
                </p>
                <p className={`${play.className} mb-4`}>
                    Output scenes were defined in plain-text description files, and results were written directly to screen or JPEG images.
                </p>
        
                {/* Key Features Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Key Features
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li>Full CPU ray tracing with no GPU rendering</li>
                    <li>Triangle and sphere intersection</li>
                    <li>Per-light Phong shading with smooth interpolation</li>
                    <li>Shadow ray casting for hard shadows</li>
                    <li>Configurable global ambient lighting</li>
                    <li>Scene loading from custom .scene files</li>
                    <li>640×480 image output with optional JPEG saving</li>
                </ul>
        
                {/* Extra Credit Features Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Extra Credit Features
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li>Recursive reflections with depth control</li>
                    <li>Randomized supersampling for anti-aliasing</li>
                    <li>Soft shadows via multi-sample area light simulation</li>
                </ul>
        
                {/* Technical Details Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Technical Details
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li><strong>Language:</strong> C++</li>
                    <li><strong>Special Skills:</strong> ray-surface intersection math, ray tracing, barycentric interpolation</li>
                </ul>
        
                {/* Gallery Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Gallery
                </h3>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-8">
                    <div className="relative group">
                        <Image
                        src={assets.image_005}
                        alt="Test Scene 1"
                        width={600}
                        height={400}
                        className="shadow-lg transition duration-300 w-full group-hover:grayscale group-hover:grayscale-[0.4]"
                        // If your Tailwind config doesn't support grayscale-[0.4], just use group-hover:grayscale
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-75 flex items-center justify-center transition duration-400">
                        <span className={`${play.className} text-white text-lg font-semibold text-center px-2`}>
                            Test Scene 1 - anti-aliasing, soft shadows, recursive reflection
                        </span>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image
                        src={assets.image_000}
                        alt="Test Scene 2"
                        width={600}
                        height={400}
                        className="shadow-lg transition duration-300 w-full group-hover:grayscale group-hover:grayscale-[0.4]"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-75 flex items-center justify-center transition duration-400">
                        <span className={`${play.className} text-white text-lg font-semibold text-center px-2`}>
                            Test Scene 2 - anti-aliasing, soft shadows, recursive reflection
                        </span>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image
                        src={assets.image_001}
                        alt="Snow Scene"
                        width={600}
                        height={400}
                        className="shadow-lg transition duration-300 w-full group-hover:grayscale group-hover:grayscale-[0.4]"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-75 flex items-center justify-center transition duration-400">
                        <span className={`${play.className} text-white text-lg font-semibold text-center px-2`}>
                            Snow Scene - anti-aliasing, soft shadows, recursive reflection
                        </span>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image
                        src={assets.image_002}
                        alt="Spheres Scene"
                        width={600}
                        height={400}
                        className="shadow-lg transition duration-300 w-full group-hover:grayscale group-hover:grayscale-[0.4]"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-75 flex items-center justify-center transition duration-400">
                        <span className={`${play.className} text-white text-lg font-semibold text-center px-2`}>
                            Spheres Scene - anti-aliasing, recursive reflection
                        </span>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image
                        src={assets.image_003}
                        alt="Toy Scene"
                        width={600}
                        height={400}
                        className="shadow-lg transition duration-300 w-full group-hover:grayscale group-hover:grayscale-[0.4]"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-75 flex items-center justify-center transition duration-400">
                        <span className={`${play.className} text-white text-lg font-semibold text-center px-2`}>
                            Toy Scene - basic functionality
                        </span>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image
                        src={assets.image_004}
                        alt="Table Scene"
                        width={600}
                        height={400}
                        className="shadow-lg transition duration-300 w-full group-hover:grayscale group-hover:grayscale-[0.4]"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-75 flex items-center justify-center transition duration-400">
                        <span className={`${play.className} text-white text-lg font-semibold text-center px-2`}>
                            Table Scene - basic functionality
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        previewImage: assets.raytracing_preview,
        link: '/projects/ray-tracing',
    },
    {
        id: 6,
        slug: 'game-engine',
        title: 'Simplified Game Engine',
        description: (
            <div>
                <p className={`${play.className} mb-4`}>
                Over the course of the semester, this project involved building a simple 3D game engine in C++ using Direct3D 11. 
                The engine supports textured 3D objects, z-buffering, real-time lighting, animations, models, collision detection, and post-processing effects like bloom. 
                Each lab built incrementally upon the previous one—starting with triangle rendering and culminating in environment interaction and effects rendering. 
                Multiple shader programs were implemented in HLSL, including mesh shaders, normal mapping, and lighting models.
                </p>
            </div>
        ),
        details: (
            <div className="text-lg text-gray-700">
                {/* Main Text Section */}
                <p className={`${play.className} mb-4`}>
                    The engine was developed through eleven cumulative lab assignments as part of a college course. 
                    Each module layered new functionality over a rendering framework, ranging from basic vertex processing to skinned animation, lighting pipelines, and post-processing effects. 
                    A custom math library was developed for transformations, and an SIMD-optimized version was written separately. 
                    The final lab integrated bloom using additive blending and Gaussian blur across downsampled framebuffers. 
                    Collision detection was implemented with AABBs, and a multithreaded job system allowed asynchronous processing of tasks like culling and animation.
                </p>
        
                {/* Key Features Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Key Features
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li>Textured 3D mesh rendering with per-object material parameters</li>
                    <li>Depth-based visibility using z-buffering</li>
                    <li>Real-time Phong lighting (ambient, directional, specular)</li>
                    <li>Hierarchical animation system with skinning support</li>
                    <li>Tangent-space normal mapping</li>
                    <li>Collision detection with bounding boxes and raycasting</li>
                    <li>Post-processing bloom effect using Gaussian blur</li>
                </ul>
        
                {/* Technical Details Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Technical Details
                </h3>
                <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
                    <li><strong>Rendering API:</strong> Direct3D 11</li>
                    <li><strong>Language:</strong> C++</li>
                    <li><strong>Special Skills:</strong> SIMD, writing shaders in HLSL, parallel programming</li>
                </ul>
                {/* Project Demo Section */}
                <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
                    Project Demo
                </h3>
                <div className="flex mt-8">
                    <iframe
                        src="https://drive.google.com/file/d/1DzLg8jU8EyIGzFXmVTpCbhzuUk3-jS4q/preview"
                        width="533"
                        height="300"
                        allow="autoplay"
                        className="shadow-lg"
                        title="Project Demo"
                    ></iframe>
                </div>
            </div>
        ),
        previewImage: assets.game_engine_preview,
        link: '/projects/game-engine',
    }
  ];