import React from "react";
import { BiCommentError } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="py-12 md:py-24 text-sm text-gray-600 bg-gray-50">
      <div className="container">
        <div className="mb-4">
          <h2 className="text-2xl flex items-center font-bold">
            <BiCommentError size={36} />
            <span className="mb-1 ml-2">Disclaimer</span>
          </h2>
        </div>
        <p className="mb-4">
          Any information on this website is provided "as is" without warranty
          of any kind. The author of this website disclaims all warranties,
          either expressed or implied, including the warranties of
          merchantability and fitness for a particular purpose. In no event
          shall the author of this website or its suppliers be liable for any
          damages whatsoever including direct, indirect, incidental,
          consequential, loss of business profits or special damages, even if
          the author of this website has been advised of the possibility of such
          damages.
        </p>
        <p className="mb-4">
          This website contains links to other websites. The author of this
          website is not responsible for the content of any linked site. The
          inclusion of any link does not imply endorsement by the author of this
          website. This website and the information it contains is provided "as
          is" and the author of this website disclaims any and all warranties,
          whether express or implied, including (without limitation) any implied
          warranties of merchantability or fitness for a particular purpose.
        </p>
        <p className="mb-4">
          In no event will the author of this website be liable to you or anyone
          else for any decision made or action taken by you in reliance on such
          information or for any consequential, special or similar damages, even
          if advised of the possibility of such damages. The information on this
          website is provided for general information only.
        </p>
      </div>
    </footer>
  );
};
