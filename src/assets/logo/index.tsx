import { CSSProperties, forwardRef, Ref } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

export const Logo = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="267" height="36" viewBox="0 0 267 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.723 24.831C5.77779 22.7762 9.1142 22.7762 11.169 24.831L14.892 28.554L11.169 32.277C9.1142 34.3318 5.77779 34.3318 3.723 32.277C1.66821 30.2222 1.66821 26.8858 3.723 24.831Z" fill="white" />
      <path d="M32.2768 11.169L28.5538 14.892L24.8308 11.169C22.776 9.11419 22.776 5.77777 24.8308 3.72299C26.8856 1.6682 30.222 1.6682 32.2768 3.72299C34.3315 5.77778 34.3315 9.11419 32.2768 11.169Z" fill="white" />
      <path d="M12.0671 23.9326C12.9167 24.7822 13.8225 25.5166 14.7557 26.1337L26.1315 14.7579C25.5155 13.8246 24.7801 12.9189 23.9304 12.0693C23.0991 11.238 22.2138 10.5158 21.3009 9.90793L9.90576 21.3031C10.5137 22.216 11.2358 23.1013 12.0671 23.9326Z" fill="#FFCF01" />
      <path d="M19.6241 8.92978C15.7839 7.00509 11.7601 7.04996 9.40499 9.40611C7.04986 11.7612 7.00397 15.7861 8.92866 19.6252L19.6241 8.92978Z" fill="#FFCF01" />
      <path d="M16.4397 27.1037C20.2595 28.9947 24.2507 28.9376 26.5936 26.5947C28.9354 24.2529 28.9936 20.2617 27.1025 16.4409L16.4407 27.1027L16.4397 27.1037Z" fill="#FFCF01" />
      <path d="M38.4304 2.17346H44.1402V33.8753H38.4304V2.17346Z" fill="white" />
      <path d="M70.9022 13.027V33.3388H65.1924V30.8113C63.7543 32.8156 60.9208 33.7315 58.6544 33.7315C53.4239 33.7315 48.6719 29.6781 48.6719 23.1391C48.6719 16.6 53.4229 12.5476 58.6544 12.5476C61.0075 12.5476 63.7543 13.4197 65.1924 15.4678V13.027H70.9022ZM65.018 23.1391C65.018 20.0016 62.4028 17.9086 59.7437 17.9086C56.8664 17.9086 54.4694 20.1322 54.4694 23.1391C54.4694 26.146 56.8674 28.4134 59.7437 28.4134C62.62 28.4134 65.018 26.2347 65.018 23.1391Z" fill="white" />
      <path d="M96.2691 13.027V33.3388H90.5593V30.0259C89.6872 32.685 86.462 33.8182 84.4568 33.8182C79.1386 33.8182 76.349 30.2881 76.3928 24.1856V13.027H82.1027V23.5756C82.1027 26.7569 84.0212 28.1961 85.9827 28.1961C87.9441 28.1961 90.5593 27.1057 90.5593 23.4451V13.027H96.2691Z" fill="white" />
      <path d="M121.896 22.4292V33.8753H116.186V23.0554C116.186 19.7466 114.269 18.2707 112.307 18.2707C110.346 18.2707 107.731 19.3886 107.731 23.189V33.8743H102.02V13.0403H107.731V16.5276C108.602 13.7114 111.828 12.5038 113.832 12.5038C119.15 12.5038 121.94 16.1696 121.896 22.4292Z" fill="white" />
      <path d="M126.122 23.0962C126.122 16.6449 131.352 12.5038 137.28 12.5038C140.986 12.5038 143.95 14.2479 145.868 16.8631L141.596 19.87C140.68 18.6063 138.981 17.8219 137.324 17.8219C134.099 17.8219 131.919 20.1322 131.919 23.0962C131.919 26.0603 134.099 28.4133 137.324 28.4133C138.981 28.4133 140.68 27.629 141.596 26.3652L145.868 29.3721C143.95 32.0312 140.986 33.7315 137.28 33.7315C131.352 33.7315 126.122 29.5465 126.122 23.0962Z" fill="white" />
      <path d="M169.839 22.525V33.8753H164.129V23.1462C164.129 19.8649 162.212 18.4013 160.25 18.4013C158.289 18.4013 155.673 19.51 155.673 23.2788V33.8753H149.963V2.17346H155.673V16.4511C156.545 13.8348 159.814 12.6823 161.775 12.6823C167.093 12.6823 169.883 16.3175 169.839 22.525Z" fill="white" />
      <path d="M197.559 23.1391C197.559 29.6781 192.808 33.7315 187.577 33.7315C185.267 33.7315 182.477 32.8594 181.039 30.8113V33.3388H175.328V2.17346H181.039V15.4678C182.477 13.4197 185.267 12.5476 187.577 12.5476C192.808 12.5476 197.559 16.601 197.559 23.1391ZM191.718 23.1391C191.718 20.1322 189.364 17.9086 186.487 17.9086C183.829 17.9086 181.214 20.0016 181.214 23.1391C181.214 26.2765 183.697 28.4134 186.487 28.4134C189.277 28.4134 191.718 26.1031 191.718 23.1391Z" fill="white" />
      <path d="M222.096 25.0138H206.753C207.363 27.3679 209.28 28.6755 212.027 28.6755C214.075 28.6755 216.124 27.8473 217.344 26.4081L220.701 29.7648C218.782 32.3362 215.208 33.7315 211.634 33.7315C205.401 33.7315 200.825 29.4598 200.825 23.1829C200.825 16.906 205.794 12.5038 211.634 12.5038C217.475 12.5038 222.183 16.601 222.183 22.8341C222.183 23.4012 222.139 24.0989 222.095 25.0138H222.096ZM216.474 21.3092C216.3 18.9113 214.295 17.4731 211.723 17.4731C209.413 17.4731 207.364 18.5624 206.754 21.3092H216.474Z" fill="white" />
      <path d="M246.635 25.0138H231.291C231.901 27.3679 233.819 28.6755 236.566 28.6755C238.614 28.6755 240.663 27.8473 241.883 26.4081L245.24 29.7648C243.321 32.3362 239.747 33.7315 236.173 33.7315C229.94 33.7315 225.363 29.4598 225.363 23.1829C225.363 16.906 230.333 12.5038 236.173 12.5038C242.013 12.5038 246.722 16.601 246.722 22.8341C246.722 23.4012 246.678 24.0989 246.634 25.0138H246.635ZM241.013 21.3092C240.838 18.9113 238.833 17.4731 236.262 17.4731C233.951 17.4731 231.902 18.5624 231.292 21.3092H241.013Z" fill="white" />
      <path d="M249.858 26.8008H255.22C255.22 27.9778 256.222 29.2416 258.227 29.2416C259.884 29.2416 261.147 28.5439 261.147 27.3679C261.147 26.4958 260.451 26.0603 258.925 25.6676L256.222 25.0138C250.991 23.6184 250.295 20.6983 250.295 18.5624C250.295 15.424 253.564 12.5038 258.271 12.5038C261.975 12.5038 266.335 14.3346 266.291 19.1295H260.842C260.842 17.7781 259.709 17.0376 258.358 17.0376C257.006 17.0376 256.005 17.6914 256.005 18.7368C256.005 19.6956 256.876 20.175 258.009 20.481L261.366 21.3521C266.247 22.6597 266.858 25.7114 266.858 27.3679C266.858 31.6395 262.499 33.7315 258.315 33.7315C254.131 33.7315 249.902 31.2907 249.858 26.8008Z" fill="white" />
    </svg>
  );
};

export const LogoDark = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="149" height="20" viewBox="0 0 149 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.06833 13.7949C3.20988 12.6534 5.06345 12.6534 6.205 13.7949L8.27333 15.8633L6.205 17.9316C5.06345 19.0732 3.20988 19.0732 2.06833 17.9316C0.926783 16.7901 0.926782 14.9365 2.06833 13.7949Z" fill="#345EFF" />
      <path d="M17.9317 6.20505L15.8633 8.27338L13.795 6.20505C12.6535 5.0635 12.6535 3.20994 13.795 2.06839C14.9366 0.926837 16.7901 0.926837 17.9317 2.06839C19.0732 3.20994 19.0732 5.0635 17.9317 6.20505Z" fill="#345EFF" />
      <path d="M6.70416 13.2959C7.17618 13.7679 7.67937 14.1759 8.19785 14.5187L14.5177 8.19883C14.1755 7.68034 13.7669 7.17715 13.2949 6.70513C12.8331 6.24331 12.3412 5.84212 11.8341 5.50439L5.50342 11.835C5.84114 12.3422 6.24233 12.8341 6.70416 13.2959Z" fill="#FFCF01" />
      <path d="M10.9023 4.96108C8.76887 3.89181 6.53342 3.91674 5.22502 5.22571C3.91662 6.53411 3.89112 8.77012 4.96039 10.903L10.9023 4.96108Z" fill="#FFCF01" />
      <path d="M9.1333 15.0576C11.2554 16.1082 13.4727 16.0764 14.7743 14.7748C16.0754 13.4738 16.1077 11.2565 15.0571 9.13379L9.13387 15.057L9.1333 15.0576Z" fill="#FFCF01" />
      <path d="M21.3501 1.20752H24.5222V18.8197H21.3501V1.20752Z" fill="#345EFF" />
      <path d="M39.3902 7.23752V18.5218H36.2181V17.1177C35.4191 18.2312 33.845 18.74 32.5859 18.74C29.6801 18.74 27.04 16.4881 27.04 12.8553C27.04 9.2225 29.6795 6.97119 32.5859 6.97119C33.8931 6.97119 35.4191 7.45568 36.2181 8.59352V7.23752H39.3902ZM36.1212 12.8553C36.1212 11.1123 34.6683 9.94952 33.1911 9.94952C31.5925 9.94952 30.2609 11.1848 30.2609 12.8553C30.2609 14.5258 31.5931 15.7855 33.1911 15.7855C34.789 15.7855 36.1212 14.5751 36.1212 12.8553Z" fill="#345EFF" />
      <path d="M53.4826 7.2373V18.5216H50.3105V16.6811C49.826 18.1584 48.0342 18.788 46.9202 18.788C43.9657 18.788 42.4159 16.8268 42.4402 13.4365V7.2373H45.6123V13.0976C45.6123 14.865 46.6782 15.6646 47.7679 15.6646C48.8576 15.6646 50.3105 15.0588 50.3105 13.0251V7.2373H53.4826Z" fill="#345EFF" />
      <path d="M67.7201 12.4609V18.8199H64.548V12.8088C64.548 10.9706 63.4827 10.1506 62.393 10.1506C61.3033 10.1506 59.8504 10.7717 59.8504 12.883V18.8193H56.6777V7.24484H59.8504V9.18222C60.3343 7.61769 62.1267 6.94678 63.2401 6.94678C66.1947 6.94678 67.7445 8.98333 67.7201 12.4609Z" fill="#345EFF" />
      <path d="M70.0674 12.8315C70.0674 9.24739 72.9732 6.94678 76.2666 6.94678C78.3252 6.94678 79.9719 7.91575 81.0372 9.36865L78.6641 11.0391C78.1552 10.3371 77.2112 9.90131 76.2909 9.90131C74.4992 9.90131 73.2882 11.1848 73.2882 12.8315C73.2882 14.4782 74.4992 15.7854 76.2909 15.7854C77.2112 15.7854 78.1552 15.3497 78.6641 14.6476L81.0372 16.3181C79.9719 17.7954 78.3252 18.74 76.2666 18.74C72.9732 18.74 70.0674 16.415 70.0674 12.8315Z" fill="#345EFF" />
      <path d="M94.3549 12.5139V18.8197H91.1827V12.859C91.1827 11.0361 90.1174 10.223 89.0278 10.223C87.9381 10.223 86.4852 10.8389 86.4852 12.9327V18.8197H83.3125V1.20752H86.4852V9.13953C86.9691 7.68606 88.7852 7.04575 89.8749 7.04575C92.8294 7.04575 94.3792 9.0653 94.3549 12.5139Z" fill="#345EFF" />
      <path d="M109.755 12.8551C109.755 16.4879 107.116 18.7398 104.21 18.7398C102.926 18.7398 101.376 18.2553 100.577 17.1174V18.5216H97.4048V1.20752H100.577V8.59328C101.376 7.45544 102.926 6.97095 104.21 6.97095C107.116 6.97095 109.755 9.22283 109.755 12.8551ZM106.51 12.8551C106.51 11.1846 105.202 9.94928 103.604 9.94928C102.127 9.94928 100.674 11.112 100.674 12.8551C100.674 14.5981 102.054 15.7852 103.604 15.7852C105.154 15.7852 106.51 14.5018 106.51 12.8551Z" fill="#345EFF" />
      <path d="M123.387 13.8968H114.863C115.202 15.2046 116.267 15.9311 117.793 15.9311C118.931 15.9311 120.069 15.4709 120.747 14.6714L122.612 16.5362C121.546 17.9648 119.56 18.74 117.575 18.74C114.112 18.74 111.569 16.3668 111.569 12.8796C111.569 9.39245 114.33 6.94678 117.575 6.94678C120.819 6.94678 123.435 9.22302 123.435 12.6858C123.435 13.0009 123.411 13.3885 123.386 13.8968H123.387ZM120.263 11.8387C120.167 10.5065 119.053 9.70751 117.624 9.70751C116.341 9.70751 115.202 10.3127 114.863 11.8387H120.263Z" fill="#345EFF" />
      <path d="M137.019 13.8968H128.495C128.834 15.2046 129.899 15.9311 131.425 15.9311C132.563 15.9311 133.701 15.4709 134.379 14.6714L136.244 16.5362C135.178 17.9648 133.193 18.74 131.207 18.74C127.744 18.74 125.202 16.3668 125.202 12.8796C125.202 9.39245 127.962 6.94678 131.207 6.94678C134.452 6.94678 137.067 9.22302 137.067 12.6858C137.067 13.0009 137.043 13.3885 137.019 13.8968H137.019ZM133.896 11.8387C133.799 10.5065 132.685 9.70751 131.256 9.70751C129.973 9.70751 128.834 10.3127 128.496 11.8387H133.896Z" fill="#345EFF" />
      <path d="M138.81 14.8896H141.789C141.789 15.5435 142.345 16.2456 143.459 16.2456C144.38 16.2456 145.082 15.858 145.082 15.2046C145.082 14.7201 144.695 14.4782 143.847 14.26L142.345 13.8968C139.44 13.1216 139.053 11.4993 139.053 10.3127C139.053 8.5691 140.869 6.94678 143.484 6.94678C145.542 6.94678 147.964 7.96392 147.939 10.6278H144.912C144.912 9.87694 144.283 9.46555 143.532 9.46555C142.781 9.46555 142.225 9.82877 142.225 10.4096C142.225 10.9422 142.709 11.2086 143.338 11.3786L145.203 11.8625C147.915 12.5889 148.254 14.2844 148.254 15.2046C148.254 17.5778 145.833 18.74 143.508 18.74C141.184 18.74 138.834 17.384 138.81 14.8896Z" fill="#345EFF" />
    </svg>

  );
};

export const GoogleIcon = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="25" height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.001 12.7332C23.001 11.8699 22.9296 11.2399 22.7748 10.5865H12.7153V14.4832H18.62C18.501 15.4515 17.8582 16.9099 16.4296 17.8898L16.4096 18.0203L19.5902 20.435L19.8106 20.4565C21.8343 18.6249 23.001 15.9298 23.001 12.7332Z" fill="#4285F4" />
      <path d="M12.714 23C15.6068 23 18.0353 22.0666 19.8092 20.4567L16.4282 17.8899C15.5235 18.5083 14.3092 18.9399 12.714 18.9399C9.88069 18.9399 7.47596 17.1083 6.61874 14.5766L6.49309 14.5871L3.18583 17.0954L3.14258 17.2132C4.90446 20.6433 8.5235 23 12.714 23Z" fill="#34A853" />
      <path d="M6.62046 14.5767C6.39428 13.9234 6.26337 13.2233 6.26337 12.5C6.26337 11.7767 6.39428 11.0767 6.60856 10.4234L6.60257 10.2842L3.25386 7.7356L3.14429 7.78667C2.41814 9.21002 2.00146 10.8084 2.00146 12.5C2.00146 14.1917 2.41814 15.79 3.14429 17.2133L6.62046 14.5767Z" fill="#FBBC05" />
      <path d="M12.7141 6.05997C14.7259 6.05997 16.083 6.91163 16.8569 7.62335L19.8807 4.73C18.0236 3.03834 15.6069 2 12.7141 2C8.52353 2 4.90447 4.35665 3.14258 7.78662L6.60686 10.4233C7.47598 7.89166 9.88073 6.05997 12.7141 6.05997Z" fill="#EB4335" />
    </svg>
  );
};

export const AppleIcon = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30.5 16.5C30.5 24.228 24.235 30.5 16.5 30.5C8.765 30.5 2.5 24.228 2.5 16.5C2.5 8.76499 8.765 2.49999 16.5 2.49999C24.235 2.49999 30.5 8.76499 30.5 16.5Z" fill="#1E2C4F" />
      <path d="M23.0621 12.9574C22.9857 13.002 21.1671 13.9425 21.1671 16.0279C21.2528 18.4061 23.4621 19.2401 23.5 19.2401C23.4621 19.2847 23.1665 20.3763 22.2907 21.5205C21.5956 22.5062 20.8242 23.5 19.6528 23.5C18.5385 23.5 18.1385 22.8431 16.8528 22.8431C15.472 22.8431 15.0813 23.5 14.0242 23.5C12.8528 23.5 12.0242 22.453 11.2913 21.4766C10.3391 20.1986 9.52978 18.1931 9.50121 16.2675C9.48195 15.2471 9.69189 14.244 10.2248 13.3921C10.977 12.2026 12.3198 11.3952 13.7863 11.3686C14.9099 11.3333 15.9099 12.0875 16.5956 12.0875C17.2528 12.0875 18.4814 11.3686 19.8714 11.3686C20.4714 11.3692 22.0714 11.5376 23.0621 12.9574ZM16.5006 11.1649C16.3006 10.233 16.8528 9.30119 17.3671 8.70677C18.0242 7.98792 19.0621 7.5 19.9571 7.5C20.0143 8.43185 19.6522 9.34575 19.005 10.0114C18.4242 10.7302 17.4242 11.2714 16.5006 11.1649Z" fill="white" />
    </svg>
  );
};