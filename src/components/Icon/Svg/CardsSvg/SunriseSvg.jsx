export function SunriseSvg({ ...props }) {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g opacity="0.7">
        <rect width="32" height="32" fill="url(#pattern0_4008_7334)" />
      </g>
      <defs>
        <pattern
          id="pattern0_4008_7334"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_4008_7334" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_4008_7334"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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TCXiCwgggAACCJQnQAegvDIlRwgggAACCEwVoAMwlYgvIIAAAgggUJ4AHYDyypQcIYAAAgggMFWADsBUIr6AAAIIIIBAeQJ0AMorU3KEAAIIIIDAVAE6AFOJ+AICCCCAAALlCdABKK9MyRECCCCAAAJTBegATCXiCwgggAACCJQnQAegvDIlRwgggAACCEwVoAMwlYgvIIAAAgggUJ4AHYDyypQcIYAAAgggMFWADsBUIr6AAAIIIIBAeQJ0AMorU3KEAAIIIIDAVAE6AFOJ+AICCCCAAALlCdABKK9MyRECCCCAAAJTBegATCXiCwgggAACCJQnQAegvDIlRwgggAACCEwVoAMwlYgvIIAAAgggUJ4AHYDyypQcIYAAAgggMFWADsBUIr6AAAIIIIBAeQJ0AMorU3KEAAIIIIDAVAE6AFOJ+AICCCCAAALlCdABKK9MyRECCCCAAAJTBegATCXiCwgggAACCJQnQAegvDIlRwgggAACCEwVoAMwlYgvIIAAAgggUJ4AHYDyypQcIYAAAgggMFWADsBUIr6AAAIIIIBAeQJflvTPxP+8TRYEEEAAAQQQyFjgI4kbf3cmDs44vyQNAQQQQAABBCS9PqAD8H/IIoAAAggggEDeAg8O6ABsk3eWSR0CCCCAAAIILC3pooSdgAslLQUrAggggAACCOQv8IqEHYCX5Z9dUogAAggggAACFlhe0m8SdALOkrQcpAgggAACCCDQHYF7SLq0RifgckkbdSe7pBQBBBBAAAEEhgIPlOR7+POOC+B1HjDcCD8RQAABBBBAoHsCd5J03BydgGMl3bF72STFCCCAAAIIIDBOYEdJh0u6bExnwJ/5bzuMW5HPEEAAAQQQQKD7AstI2kDStoN//t2fsSCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAII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xRz8xR78nLl198yNsqPs6sbAtZLWp5lDYJLA/9ABoANADBADxEBxMfCOSRU/f0PAAh4QiBEBOduoe7bB+sQQMZBPDPxQ0nI0cQjMInBrScdwBlDcGQAVcj4VMmVBWTQVAz+S5IHeWBCYWWApSW9mamA6AXQEiQFioJMxcIOkgzjzn7nN44tjBNaT9EFJF1AJdLISaOosg/1wRksM5BEDfpD7E5I2HFOf8xEClQSWlLSppEdKeo6kPfmHATFADBADWcTAcyU9StJmkpauVMOzEgIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEB/BdaUtJmkR0nahX8Y9CgGHi3p/pLW7u/hT84RQKBvAqtKep2kX0r6J/8wIAZ0tqT96Qz0rSokvwj0S+Alki6lwqfRJwbGxsCVkl4racl+VQvkFgEEShZYVtKhVPpjK32ugnAlaGEMHCXp1iVXCOQNAQT6I3AwjT+NPzEwVwx8XdJS/akiyCkCCJQosAcV/1wV/8KzQf7f3ysErymxQiBPCCDQDwFfxryADgAdAGKgUgxcLWmdflQV5BIBBEoT2IuKv1LFz1l/f8/6F5a93w5gQQABBDon8D06AHQAiIFaMfCbzh31JBgBBHovsIyk66n8a1X+C88G+X8/rwys1fvaBAAEEOiUwLo0/jT+xECSGNi8U0c+iUUAgd4LbEzln6Ty56y/n2f9o+X+0N7XJgAggECnBDzO/2glxu94EAPVYuBenTrySSwCCPRewMOZXkUngE4QMVArBm6UdNve1yYAIIBA5wS+ROVfq/LnjLnaGXNJbid27qgnwQgggICkp9ABoANADNSKgZdTkyCAAAJdFPBY5qfRANRqAEo6myUv813R+LOkFbt44JNmBBBAwALbS7qBTgCdAGJg7hjYlSoEAQQQ6LrA3lT+c1f+nC3Pd7Zcmtfbun7Qk34EEEBgKLCnpOvoCNARIAYmxsBNkjz+v9+iYUEAAQSKEdha0k9pACY2AKWdyZKf2a9k/FrSI4o52skIAgggsEBgCUk7S/qopPN4PoDOQI87hH7H3w/6fUbSEyUtveBY4b8IhAr8f4NJ78BNZUedAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}
