// import Seo from "../shared/Seo";
 import Navbar from "../components/Navbar"
// import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

// import { Link } from "react-router-dom";






function Home(){


  

    return(

        <>

<Navbar/> 

                <div className="signup__page"> 

                  
                    <div className="header_section">
{/* ----------- svg for the header section ---------- */}

                    <div className="svg_section" >
                        <svg width="80%" height="422" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M874.423 33.45c.105-.29.192-.526.261-.779.326-1.318.238-2.614-.066-3.943-.437-1.85-1.267-3.515-2.295-5.088-1.706-2.591-3.876-4.78-6.33-6.642-3.636-2.766-7.658-4.735-12.032-5.979-2.458-.69-4.93-1.11-7.469-1.026-.918.03-1.817.148-2.716.303-.521.096-1.023.354-1.524.577-.179.074-.359.148-.504.006-.092-.125-.184-.322-.186-.466.014-.343.245-.58.532-.691.573-.26 1.128-.572 1.739-.688.988-.21 1.995-.33 3.021-.36 1.944-.132 3.91.115 5.825.56 6.683 1.576 12.538 4.694 17.442 9.552 2.188 2.17 3.983 4.634 5.116 7.52.985 2.528 1.394 5.063.382 7.741.2.124.399.211.58.317 2.375 1.25 4.644 2.718 6.683 4.495 1.984 1.723 3.718 3.665 4.9 6.028.369.752.667 1.541.892 2.331 1.038 3.896-.434 7.3-3.94 9.288-1.27.718-2.634 1.166-4.053 1.49-2.766.61-5.575.68-8.387.497-.775-.045-1.533-.144-2.326-.206-.163-.016-.307-.014-.541-.03.075.252.132.485.188.683.581 1.884.857 3.826.611 5.792-.295 2.453-1.296 4.573-3.149 6.252-1.105.986-2.339 1.667-3.738 2.153-2.207.765-4.492.954-6.816.856a22.588 22.588 0 0 1-.974-.06c.003.252.024.486.027.702.098 2.196-.345 4.255-1.656 6.072-.939 1.326-2.188 2.278-3.638 2.998-1.862.923-3.82 1.36-5.872 1.53-2.842.25-5.655-.004-8.437-.619-.216-.033-.451-.085-.722-.135.022.27.042.468.063.701.281 2.375.453 4.75.266 7.13-.077 1.1-.244 2.182-.447 3.265a5.834 5.834 0 0 1-.891 2.263c-.336.526-.658.746-1.16.86-.001-.036-.02-.09-.02-.09.588-.53.85-1.235 1.039-1.975.293-1.139.387-2.293.409-3.446.072-2.954-.179-5.905-.593-8.836a1.144 1.144 0 0 1-.057-.234c-.163-.052-.344-.122-.542-.173-4.809-1.455-9.195-3.744-13.088-6.903-2.073-1.668-3.916-3.573-5.241-5.898a10.436 10.436 0 0 1-1.075-2.581 5.952 5.952 0 0 1-.152-2.106c.215-1.57 1.067-2.66 2.537-3.218 1.022-.39 2.066-.404 3.149-.273 2.218.28 4.192 1.139 6.026 2.36 4.068 2.76 6.797 6.528 8.133 11.249.527 1.866.857 3.826 1.276 5.73l.116.647c.072.035.109.07.163.088 3.306.806 6.66 1.162 10.059.707 1.924-.257 3.737-.766 5.4-1.812 2.734-1.745 4.031-4.714 3.522-8.13-.181-.034-.416-.085-.632-.118-4.277-.687-8.292-2.044-12.012-4.286-1.542-.936-2.977-1.982-4.2-3.318-.712-.766-1.37-1.586-1.742-2.555-.223-.537-.392-1.13-.435-1.705-.124-1.332.547-2.42 1.765-3.012.698-.314 1.435-.45 2.192-.458 1.296-.016 2.56.257 3.772.693 2.858 1.01 5.31 2.655 7.425 4.791 2.37 2.385 4.097 5.138 4.929 8.442l.075.215c.162.016.342.05.505.066 1.893.14 3.801.08 5.669-.338 1.455-.324 2.8-.863 4.014-1.742 1.661-1.19 2.704-2.806 3.166-4.775.378-1.518.396-3.067.089-4.612-.173-.88-.453-1.724-.68-2.586-.094-.377-.331-.536-.728-.603a51.43 51.43 0 0 1-7.93-1.94c-3.96-1.267-7.798-2.878-11.337-5.086-1.724-1.078-3.323-2.284-4.693-3.798-.675-.767-1.262-1.588-1.58-2.575-.505-1.597.145-2.956 1.704-3.569a4.47 4.47 0 0 1 1.365-.34 12.571 12.571 0 0 1 2.179-.009c1.605.143 3.177.574 4.679 1.15 5.284 1.99 9.806 5.088 13.479 9.42a23.935 23.935 0 0 1 3.395 5.273c.13.268.258.465.619.496 2.886.362 5.752.561 8.648.256 1.656-.164 3.273-.472 4.815-1.066.896-.336 1.755-.778 2.505-1.364 1.945-1.482 2.786-3.438 2.595-5.867-.147-1.745-.833-3.304-1.751-4.77-1.23-1.948-2.817-3.568-4.617-5.005-1.855-1.49-3.852-2.727-5.972-3.8a1.077 1.077 0 0 0-.362-.14c-.107.109-.214.182-.285.291-.922 1.2-2.082 2.06-3.499 2.564-.932.336-1.901.635-2.872.791-4.153.645-8.159.045-11.998-1.674-.888-.404-1.74-.916-2.433-1.592a10.958 10.958 0 0 1-.638-.658c-1.189-1.481-.884-3.106.688-4.133.662-.423 1.397-.666 2.152-.819 1.185-.266 2.41-.317 3.653-.278 3.117.088 6.151.736 9.099 1.727 1.645.539 3.239 1.24 4.849 1.85.234.016.434.104.651.21Zm-40.69 49.122c-.135-.737-.25-1.384-.385-2.049-.44-2.138-.934-4.257-1.84-6.246-1.757-3.815-4.405-6.827-8.086-8.854-1.36-.758-2.825-1.263-4.394-1.37-.757-.063-1.495-.036-2.23.243-1.04.41-1.679 1.137-1.756 2.273-.029.54-.022 1.117.146 1.637.225.754.523 1.507.909 2.205 1.105 1.968 2.637 3.606 4.348 5.063 3.731 3.179 7.973 5.469 12.638 6.962.181.033.379.049.65.136Zm33.512-26.053c-.075-.18-.094-.27-.149-.359a23.694 23.694 0 0 0-2.587-3.913c-2.522-3.068-5.56-5.535-9.023-7.456-2.339-1.287-4.765-2.302-7.401-2.775-.848-.151-1.731-.195-2.596-.184-.54.006-1.078.157-1.598.361-.753.297-1.016.931-.808 1.703.094.377.261.717.463 1.057.57.984 1.354 1.785 2.21 2.513a24.247 24.247 0 0 0 4.196 2.921c5.277 2.98 10.938 4.912 16.878 6.083.09.017.216.033.415.049Zm-13.319 15.759c-.038-.18-.04-.324-.095-.45-.224-.61-.393-1.238-.671-1.829-1.592-3.547-4.128-6.272-7.395-8.322-1.597-.99-3.263-1.726-5.122-2.045-.848-.152-1.695-.196-2.558-.005-1.4.34-1.983 1.302-1.606 2.703.207.772.648 1.45 1.142 2.075 1.061 1.392 2.443 2.456 3.913 3.393 3.667 2.333 7.682 3.726 11.941 4.431.109.035.253.033.451.049Zm19.951-37.76c-.163-.088-.272-.158-.362-.211-3.604-1.596-7.347-2.794-11.261-3.305-1.642-.214-3.282-.32-4.937-.084a8.254 8.254 0 0 0-2.172.585c-1.469.63-1.636 1.712-.524 2.87.712.73 1.564 1.242 2.488 1.645 3.422 1.49 6.977 2.04 10.682 1.6 1.367-.16 2.677-.519 3.894-1.182a6.479 6.479 0 0 0 2.192-1.918Z" fill="#000"/><path d="M30.93 280.522c.283.129.495.204.699.305l5.998 2.461c.655.259.763.804.31 1.331a3.27 3.27 0 0 1-.443.412c-2.904 2.412-6.06 4.349-9.492 5.801-2.894 1.193-5.694 2.628-8.45 4.108a154.494 154.494 0 0 1-4.694 2.412c-1.48.734-2.918 1.602-4.286 2.525-1.43.93-2.938 1.744-4.447 2.558-.404.216-.886.316-1.35.362-.391.012-.871-.067-1.224-.251-1.148-.64-1.399-1.713-.608-2.778.51-.687 1.15-1.238 1.756-1.86.226-.22.479-.429.678-.658 3.253-3.662 6.489-7.361 9.741-11.024a286.16 286.16 0 0 1 5.69-6.358c3.421-3.634 7.537-6.099 12.322-7.494.76-.211 1.51-.395 2.297-.597-.528-.364-.786-.395-.979-.015l-.877-.307c-.265-.094-.504-.177-.606-.482-.043-.134-.237-.262-.379-.282-.576-.142-1.189-.267-1.765-.41a4.138 4.138 0 0 1-.577-.142c-.212-.074-.587-.027-.555-.374.024-.409.407-.394.69-.354.81.075 1.619.15 2.41.278 2.202.354 4.486.647 6.692 1.331.62.188 1.222.429 1.824.669.725.314.887.789.627 1.533-.168.478-.44.83-.837 1.109-.71.496-1.395 1.002-2.114 1.436-2.444 1.44-4.905 2.845-7.35 4.285-.224.13-.422.27-.701.47Z" fill="#55BBDA"/><path d="m23.312 281.899 6.13 1.771c.68.208 1.352.443 2.032.65.42.147.782.368.868.838.077.498-.154.888-.56 1.153a6.55 6.55 0 0 1-1.107.649c-8.672 4.495-17.26 9.114-25.604 14.196-.51.292-1.021.584-1.56.866-.359.219-.745.335-1.134.01-.36-.314-.345-.717-.207-1.109.37-.968.77-1.927 1.197-2.877.862-1.832 1.762-3.683 2.624-5.516.969-2.047 1.871-4.085 2.868-6.122 1.026-2.121 2.126-4.184 3.198-6.257.483-.93.938-1.869 1.44-2.855l-.839-.294c-.848-.266-1.735-.514-2.573-.808-1.035-.362-1.184-1.011-.46-1.825.458-.499.943-.988 1.457-1.467.684-.608 1.424-1.197 2.126-1.767 2.079-1.72 4.185-3.43 6.236-5.161.74-.588 1.427-.755 2.275-.489 1.362.414 2.733.801 4.095 1.215 3.097.929 6.222 1.867 9.309 2.824.82.256 1.631.54 2.414.815.28.098.531.186.791.34.902.473 1.06 1.187.355 1.945-.315.361-.694.636-1.083.939-2.568 1.863-5.32 3.442-8.089 4.983-1.824.993-3.712 1.901-5.582 2.847a4.628 4.628 0 0 0-.661.364.411.411 0 0 1 .044.142Z" fill="#FBE8DE"/><path d="m13.553 277.317-.866-.304c-.84-.294-1.726-.542-2.564-.836-.979-.343-1.156-1.002-.47-1.797.42-.481.896-.942 1.4-1.394.721-.626 1.461-1.214 2.173-1.812 2.117-1.739 4.223-3.449 6.284-5.207.674-.58 1.389-.738 2.237-.472 1.334.405 2.678.782 4.012 1.186 3.124.939 6.24 1.905 9.392 2.853.793.247 1.576.521 2.358.795.224.079.448.157.662.264 1.135.523 1.31 1.369.36 2.198-.78.7-1.66 1.333-2.55 1.9-3.54 2.214-7.114 4.351-10.88 6.139-.605.291-1.181.591-1.86.918.304.295.65.291.93.389l6.94 2.056c.196.069.402.11.616.216.725.348.9 1.101.32 1.682-.323.295-.72.533-1.107.742a40083.83 40083.83 0 0 1-9.127 4.807 332.894 332.894 0 0 0-15.882 9.033c-.718.438-1.465.867-2.202 1.268-.161.101-.35.192-.52.227-.592.168-1.075-.158-1.046-.776a3.54 3.54 0 0 1 .288-1.091 554.22 554.22 0 0 1 3.074-6.709c1.144-2.457 2.25-4.895 3.449-7.331 1.006-2.065 2.097-4.101 3.15-6.118.482-.929.937-1.869 1.43-2.826ZM4.22 299.915a.41.41 0 0 0 .148.115c8.27-5.139 16.895-9.682 25.505-14.45-.587-.206-1.025-.391-1.482-.52-2.202-.615-4.386-1.192-6.588-1.807a2.807 2.807 0 0 1-.671-.235c-.828-.416-.928-1.204-.234-1.84.313-.267.7-.477 1.088-.686 2.23-1.165 4.513-2.217 6.707-3.458 2.665-1.514 5.22-3.162 7.822-4.761.199-.119.39-.304.72-.533-.698-.245-1.22-.459-1.76-.617a2364.679 2364.679 0 0 1-13.87-4.234c-.401-.109-.628 0-.893.221-2.08 1.72-4.158 3.44-6.236 5.161l-2.393 1.987c-.18.156-.37.341-.618.599l.811.285c.82.256 1.651.484 2.424.787.717.282.888.782.55 1.479a148.745 148.745 0 0 1-1.662 3.217c-1.169 2.259-2.356 4.48-3.468 6.759-1.704 3.516-3.341 7.023-4.997 10.493l-.903 2.038ZM990.157 389.16c.048-.132.087-.24.119-.355.149-.603.109-1.196-.03-1.804-.2-.845-.579-1.607-1.049-2.326-.781-1.185-1.773-2.186-2.895-3.037a16.4 16.4 0 0 0-5.501-2.733c-1.124-.316-2.255-.509-3.415-.47-.42.014-.831.068-1.242.139-.239.044-.468.162-.697.263-.082.034-.164.068-.231.003a.43.43 0 0 1-.085-.213c.007-.156.112-.265.244-.316.262-.118.515-.261.795-.314a7.732 7.732 0 0 1 1.381-.165c.889-.06 1.788.053 2.663.256 3.056.721 5.734 2.146 7.976 4.368 1 .992 1.821 2.119 2.339 3.438.451 1.156.637 2.315.175 3.54.091.056.182.096.265.145 1.086.571 2.123 1.242 3.055 2.055.908.788 1.701 1.676 2.241 2.756.169.344.305.705.408 1.066.474 1.781-.199 3.338-1.802 4.247-.581.328-1.204.533-1.853.681-1.265.279-2.549.311-3.835.227-.354-.02-.701-.065-1.063-.094-.075-.007-.14-.006-.248-.013.035.115.061.221.086.312.266.861.392 1.749.28 2.648-.135 1.122-.593 2.091-1.44 2.859a4.936 4.936 0 0 1-1.709.984c-1.009.35-2.054.436-3.117.392-.14-.007-.28-.013-.445-.028.001.115.011.222.012.321.045 1.004-.158 1.946-.757 2.776-.429.607-1 1.042-1.664 1.371-.851.422-1.746.622-2.684.7-1.3.114-2.586-.002-3.858-.283-.099-.015-.206-.039-.33-.062.01.123.019.214.029.321.128 1.085.207 2.171.121 3.26-.035.502-.111.997-.204 1.493a2.666 2.666 0 0 1-.408 1.034c-.153.241-.3.341-.53.394 0-.017-.009-.042-.009-.042.269-.242.389-.564.475-.903.134-.52.177-1.048.187-1.575.033-1.351-.082-2.7-.271-4.041a.482.482 0 0 1-.026-.106c-.075-.024-.157-.056-.248-.08a17.388 17.388 0 0 1-5.984-3.156c-.948-.763-1.791-1.634-2.397-2.697a4.823 4.823 0 0 1-.492-1.18 2.75 2.75 0 0 1-.069-.963c.099-.717.488-1.216 1.16-1.471.467-.179.945-.185 1.44-.125 1.014.128 1.917.521 2.755 1.079 1.86 1.262 3.108 2.985 3.719 5.143.241.854.392 1.75.583 2.62l.053.296c.034.016.05.033.075.041 1.512.368 3.045.531 4.599.323.88-.118 1.709-.35 2.469-.829 1.251-.797 1.844-2.155 1.611-3.717-.083-.015-.19-.039-.289-.054-1.956-.314-3.791-.934-5.492-1.96-.705-.428-1.362-.906-1.921-1.517-.325-.35-.626-.725-.796-1.168a2.56 2.56 0 0 1-.199-.78c-.057-.609.25-1.106.807-1.377a2.476 2.476 0 0 1 1.002-.209c.593-.008 1.171.117 1.725.316 1.307.462 2.428 1.215 3.395 2.191 1.084 1.091 1.873 2.35 2.254 3.86l.034.099c.074.007.156.023.231.03.865.064 1.738.037 2.592-.155.665-.148 1.28-.394 1.835-.796.759-.545 1.236-1.283 1.448-2.184a4.775 4.775 0 0 0 .04-2.108c-.079-.403-.207-.789-.31-1.183-.044-.172-.152-.245-.333-.276a23.398 23.398 0 0 1-3.626-.887c-1.811-.579-3.566-1.315-5.184-2.325-.788-.493-1.52-1.044-2.146-1.737-.309-.35-.577-.726-.722-1.177-.231-.73.066-1.351.779-1.632.197-.085.41-.137.624-.156.337-.028.667-.032.997-.003.733.065 1.452.262 2.139.526 2.416.909 4.483 2.326 6.163 4.307a10.909 10.909 0 0 1 1.552 2.41c.06.123.118.213.283.227 1.32.166 2.63.257 3.955.117.756-.075 1.496-.215 2.201-.487.41-.154.803-.356 1.145-.624.89-.677 1.274-1.572 1.187-2.682-.067-.798-.381-1.511-.801-2.181-.562-.891-1.288-1.632-2.111-2.289a15.483 15.483 0 0 0-2.73-1.738.513.513 0 0 0-.166-.064c-.049.05-.098.084-.13.134a3.434 3.434 0 0 1-1.6 1.172 7.391 7.391 0 0 1-1.313.362c-1.899.295-3.731.02-5.486-.766-.406-.184-.796-.418-1.113-.728-.1-.097-.2-.195-.291-.301-.544-.677-.405-1.42.314-1.889a2.85 2.85 0 0 1 .984-.375c.542-.122 1.102-.145 1.67-.127 1.426.04 2.813.337 4.161.79.752.246 1.481.567 2.217.846a.8.8 0 0 1 .298.095Zm-18.605 22.461c-.062-.337-.115-.633-.176-.937-.201-.977-.427-1.946-.842-2.855-.803-1.745-2.014-3.122-3.697-4.049-.622-.347-1.292-.577-2.009-.626-.346-.029-.684-.017-1.02.111-.475.187-.768.52-.802 1.039-.014.247-.011.511.066.749a5.1 5.1 0 0 0 .416 1.008c.505.899 1.206 1.649 1.988 2.314 1.706 1.454 3.646 2.501 5.779 3.184.082.015.173.022.297.062Zm15.323-11.912c-.034-.082-.043-.123-.068-.164a10.877 10.877 0 0 0-1.183-1.79 14.243 14.243 0 0 0-4.126-3.409c-1.07-.588-2.179-1.052-3.384-1.268a6.283 6.283 0 0 0-1.187-.085 2.102 2.102 0 0 0-.731.165c-.344.136-.464.426-.369.779.043.172.119.328.212.483.26.45.619.816 1.01 1.149.591.512 1.23.957 1.918 1.336 2.413 1.363 5.002 2.246 7.718 2.781.041.008.099.015.19.023Zm-6.09 7.205c-.018-.082-.018-.148-.044-.205-.102-.279-.18-.566-.306-.837-.728-1.621-1.888-2.867-3.382-3.805-.73-.452-1.492-.789-2.342-.935-.388-.07-.775-.09-1.169-.002-.641.156-.907.595-.735 1.236.095.353.296.663.522.949.486.636 1.117 1.123 1.79 1.551 1.676 1.067 3.512 1.704 5.46 2.026.049.016.115.015.206.022Zm9.122-17.265c-.074-.04-.124-.072-.166-.097-1.647-.729-3.359-1.277-5.149-1.51-.75-.098-1.5-.147-2.257-.039a3.78 3.78 0 0 0-.993.267c-.672.288-.748.783-.239 1.313.325.333.715.567 1.137.752a9.277 9.277 0 0 0 4.884.731c.625-.073 1.225-.237 1.781-.54.384-.21.719-.486 1.002-.877ZM113.007 67.287c-.482 0-.99-.027-1.472 0-.936.053-1.605.508-1.926 1.418-.508 1.39-.535 2.862-.375 4.307.054.562.188 1.097.268 1.632.027.214.08.428.08.642 0 .374-.187.615-.455.695-.348.08-.588-.08-.776-.347a1.473 1.473 0 0 1-.24-.455c-.856-2.408-.963-4.87-.081-7.277.535-1.471 1.686-2.247 3.211-2.408a11.445 11.445 0 0 1 1.658-.027c2.355.108 4.575-.481 6.716-1.444 1.257-.562 2.22-1.498 2.916-2.702.749-1.311 1.311-2.702 1.792-4.094 1.097-3.05 2.194-6.126 3.344-9.15.321-.829.776-1.631 1.178-2.407a2.03 2.03 0 0 1 .481-.589c.08-.08.294-.107.401-.053.107.053.188.24.188.374-.027.295-.054.589-.161.883a300.71 300.71 0 0 1-1.578 5.27c-.669 2.114-1.365 4.228-2.06 6.341a24.116 24.116 0 0 1-1.713 4.013c-.989 1.873-2.461 3.237-4.414 4.04-2.247.883-4.548 1.471-6.982 1.338Z" fill="#000"/><path d="M104.874 70.764v2.247c0 .535-.187.856-.589.937-.374.08-.749-.134-.936-.589a3.1 3.1 0 0 1-.187-.669c-.295-2.675-.241-5.324.615-7.919.508-1.498 1.257-2.863 2.381-3.96 1.365-1.337 2.996-1.845 4.869-1.524.803.133 1.605.32 2.408.374.749.054 1.498.054 2.221-.053 1.471-.214 2.541-1.07 3.156-2.435.295-.695.509-1.391.75-2.113.856-2.81 1.632-5.619 2.702-8.32.08-.188.133-.375.24-.536.081-.107.241-.214.348-.214.107 0 .268.16.295.268.08.32.133.642.107.936-.107.99-.188 1.953-.402 2.863-.508 2.06-1.07 4.093-1.632 6.126a11.93 11.93 0 0 1-.428 1.284c-1.07 2.703-3.157 3.987-5.993 4.147-1.23.054-2.434-.214-3.611-.428-.241-.053-.509-.08-.749-.134-1.044-.16-1.953.16-2.729.856-.856.75-1.445 1.686-1.873 2.73a14.652 14.652 0 0 0-.99 4.868c0 .428 0 .83.027 1.258-.027 0-.027 0 0 0ZM1006.11 164.226c-.03-.134 0-.188-.03-.241-1.26-2.354-2.09-4.869-3-7.357-.93-2.569-1.87-5.137-2.51-7.812-.32-1.498-.617-2.997-.56-4.522.02-.454.08-.936.24-1.391.29-.909 1.09-1.284 2-.936.38.134.73.348 1.05.615.51.401.96.856 1.44 1.284.24.214.48.428.75.616.54.347.96.24 1.31-.268.35-.508.48-1.097.54-1.685.05-.856-.11-1.659-.35-2.462-.54-1.765-1.29-3.451-2.28-5.003-.4-.642-.77-1.284-1.15-1.926a1.885 1.885 0 0 1-.24-.722c-.02-.134.11-.375.22-.401.13-.054.35.053.51.107.05.026.08.107.1.16.67.99 1.37 2.007 2.01 3.077 1.1 1.792 1.93 3.718 2.35 5.805.19.99.19 1.98-.18 2.916-.16.428-.4.856-.7 1.204-.69.803-1.71.963-2.62.428-.46-.267-.86-.642-1.26-.99-.51-.401-.99-.829-1.47-1.23-.13-.107-.35-.161-.51-.241-.27.268-.21.589-.24.883-.03 1.632.24 3.237.72 4.815.99 3.264 2.04 6.502 3.05 9.739.4 1.257.78 2.515 1.21 3.879.08-.187.13-.294.18-.428.17-.508.3-1.017.49-1.525.08-.214.18-.428.34-.615.16-.214.43-.295.65-.134.16.107.26.321.32.508.05.187 0 .375-.06.562-.37 1.471-.72 2.943-1.12 4.414-.21.749-.8 1.017-1.5.642-.37-.187-.75-.454-1.01-.775a89.115 89.115 0 0 1-3.05-3.478 2.848 2.848 0 0 1-.46-.776c-.11-.321.11-.535.4-.375.4.214.83.455 1.18.776.8.722 1.55 1.472 2.33 2.194.21.187.4.374.61.562.08 0 .16.026.3.107Z" fill="#000"/><path d="M342.296 345.27c.122.082.201.141.279.2.703.636 1.418 1.271 2.122 1.907.201.177.391.353.58.553.112.118.213.259.302.401.201.341.145.612-.168.859a2.126 2.126 0 0 1-.346.212c-.659.365-1.34.659-2.044.906-.1.036-.201.071-.323.118.044.071.078.13.122.188 1.352 1.484 2.569 3.085 3.842 4.638.056.071.112.142.168.224.067.13.067.259-.023.377a.317.317 0 0 1-.335.141c-.1-.023-.201-.071-.301-.118-.179-.094-.369-.2-.547-.306a4.96 4.96 0 0 1-.257-.141c-.413-.259-.827-.518-1.24-.789a7.77 7.77 0 0 1-.793-.576c-1.273-1.072-2.535-2.143-3.719-3.32-.58-.589-1.217-1.107-1.831-1.648-.056-.059-.123-.106-.179-.165-.167-.212-.1-.471.156-.553a.804.804 0 0 1 .235-.036c.525-.011 1.05-.023 1.575-.023h.312c-.257-.33-.469-.624-.703-.907-.302-.364-.603-.718-.905-1.083-.067-.082-.145-.094-.234-.094-1.676.083-3.317-.129-4.937-.553-1.675-.436-3.138-1.33-4.444-2.507-.782-.707-1.251-1.613-1.486-2.649-.067-.294-.078-.6-.111-.895-.201-1.601.089-3.107.759-4.544a14.404 14.404 0 0 1 1.954-3.025c1.128-1.377 2.424-2.554 3.82-3.626 2.323-1.789 4.802-3.261 7.516-4.273 1.44-.541 2.903-.93 4.422-1.083 1.821-.188 3.619-.059 5.372.542 1.742.6 3.06 1.754 3.965 3.425a9.15 9.15 0 0 1 1.061 3.143c.201 1.542-.045 3.014-.682 4.426-.458 1.001-1.05 1.908-1.697 2.767-2.647 3.543-6.009 6.027-10.062 7.475-.313.106-.626.224-.939.33-.055 0-.111.023-.256.082Z" fill="#4EAB79"/><path d="M341.334 329.4h2.466V342h-2.466v-5.22h-4.68V342h-2.484v-12.6h2.484v5.004h4.68V329.4Zm5.851 2.52a1.411 1.411 0 0 1-1.422-1.422c0-.384.138-.72.414-1.008a1.382 1.382 0 0 1 1.008-.432c.396 0 .732.144 1.008.432.288.288.432.624.432 1.008s-.144.72-.432 1.008a1.372 1.372 0 0 1-1.008.414ZM346.033 342v-9h2.322v9h-2.322Z" fill="#fff"/></svg>
                        {/* -------------------- this is a comment ------------------ */}

                        

                        

                        <div className="text_section">
                            <h3>Welcome to YUCCAPS</h3>
                            <p> The world's first social networking platform for (graduate) admission and scholarship<br/> seekers and assistants to chat, network, and access reliable information. </p>
                        </div>
                        <div className="button_section_header">
                            <button>  Join Waiting List   <svg width="21" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.415" cy="8.035" r="7.237" stroke="#fff" stroke-width=".934"/><path d="m9.482 4.138 3.897 3.896-3.897 3.897M2.465 8.034H13.27" stroke="#fff" stroke-width=".963" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                            <button> Read about Us   <svg width="21" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.415" cy="8.035" r="7.237" stroke="#fff" stroke-width=".934"/><path d="m9.482 4.138 3.897 3.896-3.897 3.897M2.465 8.034H13.27" stroke="#fff" stroke-width=".963" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>


                        </div>
                        <img alt= "het" src="./assets/image 3.svg"/>
                       
                    </div>
                    

                    </div>
                        {/* -------------------- Sponsor section ------------------ */}


                    <div className="sponsor_section">

                        <div className="s_section">
                        
                      <h3>  Trusted By </h3>  
                   

                
                      <img alt="sponsor" src="./assets/google-logo.svg"/>
                      <img alt="sponsor" src="./assets/Group2.svg"/>
                      <img alt="sponsor" src="./assets/Group.svg"/>
                      <img alt="sponsor" src="./assets/Vector.svg"/>
                      <img alt="sponsor" src="./assets/nasa-logo3.svg"/>
                      <img alt="sponsor" src="./assets/amazon_logo2.svg"/>
                      <img alt="sponsor" src="./assets/facebook-corporate-logo2.svg"/>


                      </div>

                     </div>

                        {/* -------------------- What we do Section ------------------ */}

                     <div className="wwo_section">
                        <h3>What we Offer <svg className="" width="61" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y=".5" width="61" height="5" rx="1" fill="#4EAB79"/></svg> </h3>
                        <div className="wwo_card_section">
                            <div className="wwo_card">
                            <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#4EAB79" fill-opacity=".11"/><path d="m23.05 15.53-6.02 3.93c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.72-2.86-.72-3.94-.01Z" stroke="#4EAB79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m18.63 26.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M34.4 28v-6" stroke="#4EAB79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <div>
                                <h3>Scholariship posibilities</h3>
                                    <span>Amet minim mollit non deserunt ullamco est 
                                        sit aliqua dolor do amet sint. Velit officia consequat
                                        duis enim velit mollit. Exercitation veniam consequat
                                        sunt nostrud amet.
                                    </span>
                            </div>


                            </div>

                            <div className="wwo_card">
                            <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#4EAB79" fill-opacity=".11"/><path d="M17.26 24.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0l-4.73 2.73c-1.72 1.16-1.72 1.16-1.72 2.98Z" stroke="#4EAB79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.5 20.63V18c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M25.63 23.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z" stroke="#4EAB79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

                            <div>
                                <h3>Networking Opportunities</h3>
                                    <span>Amet minim mollit non deserunt ullamco est 
                                        sit aliqua dolor do amet sint. Velit officia consequat
                                        duis enim velit mollit. Exercitation veniam consequat
                                        sunt nostrud amet.
                                    </span>
                            </div>

                            </div>

                        <div className="wwo_card">
                        <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#4EAB79" fill-opacity=".11"/><path d="M16.5 31V20c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42" stroke="#4EAB79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.35 28H33.5v3.5c0 1.93-1.57 3.5-3.5 3.5H20c-1.93 0-3.5-1.57-3.5-3.5v-.65c0-1.57 1.28-2.85 2.85-2.85ZM21 20h8M21 23.5h5" stroke="#4EAB79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div>
                                <h3>1 one 1 Communication</h3>
                                    <span>Amet minim mollit non deserunt ullamco est 
                                        sit aliqua dolor do amet sint. Velit officia consequat
                                        duis enim velit mollit. Exercitation veniam consequat
                                        sunt nostrud amet.
                                    </span>
                            </div>
                        </div>
                        </div>

                     </div>

                        {/* -------------------- How it Works Section ------------------ */}

                <div className="hiw_section">
                <h3>How it works <svg className="" width="61" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y=".5" width="61" height="5" rx="1" fill="#4EAB79"/></svg> </h3>


                <p> Amet minim mollit non deserunt ullamco est <br/>sit aliqua dolor do amet sint. Velit officia consequat</p>

                <div className="hiw_card_section">
                    <div className="hiw_card">
                        <img src="./assets/Group 201.svg" />

                    </div>
                    <div className="hiw_card">
                        <h5>Create an Account</h5>
                        <span>
                        Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor do amet sint. Velit officia consequat <br />
                        duis enim velit mollit. Exercitation veniam consequat <br />
                        sunt nostrud amet.
                        </span>
                        <svg width="145" height="145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 144.005A144.006 144.006 0 0 1 144.005 0L0 144.005A144.001 144.001 0 0 0 144.005 0" fill="#084B9A" fill-opacity=".04"/></svg>

                        </div>
                        <div className="hiw_card" style={{margin :" -4rem 5rem"}}>
                        <h5>Search for reliable information</h5>
                        <span>
                        Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor do amet sint. Velit officia consequat <br />
                        duis enim velit mollit. Exercitation veniam consequat <br />
                        sunt nostrud amet.
                        </span>
                        <svg width="145" height="145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 144.005A144.006 144.006 0 0 1 144.005 0L0 144.005A144.001 144.001 0 0 0 144.005 0" fill="#084B9A" fill-opacity=".04"/></svg>
                        

                        </div>
                        <div className="hiw_card">
                            <img src="./assets/Group 202.svg"/>
                        

                        </div>
                        <div className="hiw_card">
                            <img src="./assets/Group 203 copy.svg"/>
                        

                        </div>
                        <div className="hiw_card">
                        <h5>Receive scholarship or admission notification</h5>
                        <span>
                        Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor do amet sint. Velit officia consequat <br />
                        duis enim velit mollit. Exercitation veniam consequat <br />
                        sunt nostrud amet.
                        </span>
                        <svg width="145" height="145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 144.005A144.006 144.006 0 0 1 144.005 0L0 144.005A144.001 144.001 0 0 0 144.005 0" fill="#084B9A" fill-opacity=".04"/></svg>
                        
                        

                        </div>
                </div>

                </div>
                        {/* -------------------- Newsletter Section ------------------ */}
            

                <div className="newsletter_section">
               <svg width="293" height="293" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M239 147a93 93 0 1 1-186 0h26.821a66.18 66.18 0 1 0 132.358 0H239Z" fill="url(#a)"/><path d="M293 146.5a146.5 146.5 0 0 1-293 0h42.25A104.247 104.247 0 0 0 146.5 250.749a104.245 104.245 0 0 0 73.715-30.534 104.245 104.245 0 0 0 30.534-73.715H293Z" fill="url(#b)"/><defs><linearGradient id="a" x1="146" y1="54" x2="146" y2="240" gradientUnits="userSpaceOnUse"><stop stop-color="#084B9A"/><stop offset="1" stop-color="#4EAB79"/></linearGradient><linearGradient id="b" x1="146.5" y1="0" x2="146.5" y2="293" gradientUnits="userSpaceOnUse"><stop stop-color="#084B9A"/><stop offset="1" stop-color="#4EAB79"/></linearGradient></defs></svg>
                <h3>Get the latest Update when you <br/> join our Newsletter</h3>
               <form action="">
                   <input type="text" placeholder="Enter your Email" />
                   <button> Send</button>
               </form>
                </div>

                    <Footer/>
                </div>
          
        </>
    );
}

export default Home;