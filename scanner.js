var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootElement = document.getElementById('scanner_react_container');

var ScannerApp = function (_React$Component) {
    _inherits(ScannerApp, _React$Component);

    function ScannerApp(props) {
        _classCallCheck(this, ScannerApp);

        // this.handleCLick = this.handleClick.bind(this);
        var _this = _possibleConstructorReturn(this, (ScannerApp.__proto__ || Object.getPrototypeOf(ScannerApp)).call(this, props));

        _this.setDomain = _this.setDomain.bind(_this);
        // this.processJson = this.processJson.bind(this);
        _this.state = {
            domain: "", method: ""
        };
        return _this;
    }
    // isValidUrl(inputUrl){
    //     if(inputUrl.includes(".")) {
    //         try {
    //             const url = new URL(inputUrl)
    //             if (url.protocol === "http:" || url.protocol === "https:") {
    //                 return url.hostname;
    //             } else{
    //                 return false;
    //             }
    //         } catch (TypeError) {
    //             return false;
    //         }
    //     } else{
    //         return false;
    //     }
    // }
    // checkDomain(){
    //     //TODO add more in depth error checking
    //     let currDomain = this.state.domain
    //     if (currDomain === ""){
    //         return false;
    //     } else if( (currDomain.substring(0,7) === "http://") || currDomain.substring(0,8) === "https://" ){
    //         return this.isValidUrl(currDomain);
    //     } else {
    //         currDomain = "http://" + currDomain;
    //         return this.isValidUrl(currDomain);
    //     }
    // }
    // handleClick(button){
    //     console.log(button);
    //     let domainToSend = this.checkDomain();
    //     if (domainToSend) {
    //         const requestData = {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({"domain": this.state.domain, "method": button})
    //
    //         }
    //         // const response = await fetch()
    //         console.log("before Fetch")
    //         fetch('http://127.0.0.1:5000/', requestData)
    //             // .then(response =>response.json())
    //             .then(response => response.json())
    //             .then(json => this.processJson(json, button))
    //         console.log("afte fetch")
    //     } else {
    //         alert("invalid url, please enter a valid url");
    //     }
    //         // console.log(response)
    // }
    //
    // processJson(json, button){
    //     console.log("json.output type: " + typeof json.output);
    //     // if(json.output){
    //     //     console.log("if json output is true");
    //     // }
    //     if (json.output === null || json.output === {}){
    //         alert("invalid url, please enter a valid url");
    //     } else{
    //         alert(button + ": " + json.output);
    //     }
    // }


    _createClass(ScannerApp, [{
        key: "setDomain",
        value: function setDomain(event) {
            var _this2 = this;

            this.setState({ domain: event.target.value }, function () {
                return _this2.render();
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "ScannerApp" },
                React.createElement("input", { id: "domain_input", type: "text", value: this.state.domain, onChange: this.setDomain }),
                React.createElement(MethodsList, { domain: this.state.domain })
            );
        }
    }]);

    return ScannerApp;
}(React.Component);
// function MethodsButtons(props){


var MethodsList = function (_React$Component2) {
    _inherits(MethodsList, _React$Component2);

    function MethodsList(props) {
        _classCallCheck(this, MethodsList);

        var _this3 = _possibleConstructorReturn(this, (MethodsList.__proto__ || Object.getPrototypeOf(MethodsList)).call(this, props));

        console.log("In methods buttons props.domain: " + props.domain);
        return _this3;
    }

    _createClass(MethodsList, [{
        key: "render",
        value: function render() {
            console.log("in methods buttons render props.domain");
            return React.createElement(
                "div",
                { className: "scanner_methods_list" },
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "ipv4_addresses" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "ipv6_addresses" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "rdns_names" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "rtt_range" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "tls_versions" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "http_server" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "insecure_http" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "redirect_to_https" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "hsts" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "root_ca" })
            );
        }
    }]);

    return MethodsList;
}(React.Component);

var MethodsListItem = function (_React$Component3) {
    _inherits(MethodsListItem, _React$Component3);

    function MethodsListItem(props) {
        _classCallCheck(this, MethodsListItem);

        var _this4 = _possibleConstructorReturn(this, (MethodsListItem.__proto__ || Object.getPrototypeOf(MethodsListItem)).call(this, props));

        console.log("In methods buttons props.domain: " + props.domain);
        return _this4;
    }

    _createClass(MethodsListItem, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "scanner_method_list_item" },
                React.createElement(MethodsButtonExplanation, { method: this.props.method }),
                React.createElement(MethodsButton, { domain: this.props.domain, method: this.props.method })
            );
        }
    }]);

    return MethodsListItem;
}(React.Component);

var MethodsButtonExplanation = function (_React$Component4) {
    _inherits(MethodsButtonExplanation, _React$Component4);

    function MethodsButtonExplanation(props) {
        _classCallCheck(this, MethodsButtonExplanation);

        var _this5 = _possibleConstructorReturn(this, (MethodsButtonExplanation.__proto__ || Object.getPrototypeOf(MethodsButtonExplanation)).call(this, props));

        _this5.method_explanations = { "ipv4_addresses": "A list of IPv4 addresses listed as DNS \"A\" records for the domain.",
            "ipv6_addresses": "A list of IPv6 addresses listed as DNS \"AAAA\" records for the domain",
            "rdns_names": "Lists the reverse dns names for the sites IPv4 addresses.",
            "rtt_range": "Prints the shortest and longest round trip time (RTT) observed when contacting all the sites IPv4 addresses.",
            "tls_versions": "Lists all versions of Transport Layer Security (TLS/SSL) supported by the server",
            "http_server": "The web server software reported in the Server Header of the HTTP response. If there is no server header in the response \"No Server Header\" is shown.",
            "insecure_http": "Returns a JSON boolean indicating whether the website listens for unencrypted HTTP requests on port 80.",
            "redirect_to_https": "Returns a JSON boolean indicating whether unencrypted HTTP requests on port 80 are redirected to HTTPS requests on port 443. After 10 redirects, it gives up and says false.",
            "hsts": "Returns a JSON boolean indicating whether the website has enabled HTTP Strict Transport Security",
            "root_ca": "Lists the originization name of the root certificate authority (CA) at the base of the chain of trust for validating this server's public key.}"
        };
        return _this5;
    }

    _createClass(MethodsButtonExplanation, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "methods_button_explanation_container" },
                React.createElement(
                    "p",
                    { className: "methods_button_explanation" },
                    this.method_explanations[this.props.method]
                )
            );
        }
    }]);

    return MethodsButtonExplanation;
}(React.Component);

var MethodsButton = function (_React$Component5) {
    _inherits(MethodsButton, _React$Component5);

    function MethodsButton(props) {
        _classCallCheck(this, MethodsButton);

        var _this6 = _possibleConstructorReturn(this, (MethodsButton.__proto__ || Object.getPrototypeOf(MethodsButton)).call(this, props));

        _this6.handleCLick = _this6.handleClick.bind(_this6);
        _this6.processJson = _this6.processJson.bind(_this6);
        _this6.state = {
            domain: _this6.props['domain'],
            output: ""
        };
        return _this6;
    }

    _createClass(MethodsButton, [{
        key: "isValidUrl",
        value: function isValidUrl(inputUrl) {

            if (inputUrl.includes(".")) {
                try {
                    var url = new URL(inputUrl);
                    if (url.protocol === "http:" || url.protocol === "https:") {
                        return url.hostname;
                    } else {
                        return false;
                    }
                } catch (TypeError) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }, {
        key: "checkDomain",
        value: function checkDomain() {
            //TODO add more in depth error checking

            var currDomain = this.props.domain;
            console.log(this.props.domain);
            if (currDomain === "") {
                return false;
            } else if (currDomain.substring(0, 7) === "http://" || currDomain.substring(0, 8) === "https://") {
                return this.isValidUrl(currDomain);
            } else {
                currDomain = "http://" + currDomain;
                return this.isValidUrl(currDomain);
            }
        }
    }, {
        key: "handleClick",
        value: function handleClick(method) {
            var _this7 = this;

            console.log(method);
            var domainToSend = this.checkDomain();
            if (domainToSend) {
                console.log("this.props.domain: " + this.props.domain + " method: " + this.props.method);
                var requestData = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "domain": this.props.domain, "method": method })
                    // const response = await fetch()
                };console.log("before Fetch");
                fetch('http://127.0.0.1:5000/', requestData)
                // .then(response =>response.json())
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    return _this7.processJson(json, method);
                });
                console.log("afte fetch");
            } else {
                alert("invalid url, please enter a valid url");
            }
            // console.log(response)
        }
    }, {
        key: "processJson",
        value: function processJson(json, method) {
            var _this8 = this;

            if (json.output === null) {
                alert("invalid url, please enter a valid url");
            } else {
                var outputToSet = json.output.toString();
                outputToSet = outputToSet.replace(/,/g, "\n");
                this.setState({ output: outputToSet }, function () {
                    return _this8.render();
                });
                // alert(method + ": " + json.output);
                console.log(method + ": " + json.output);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            // let method = this.props.method;
            if (this.state.domain !== this.props.domain) {
                this.setState({ domain: this.props.domain, output: "" }, function () {
                    return _this9.render();
                });
            }
            return React.createElement(
                "div",
                { className: "method_button_and_output" },
                React.createElement(
                    "button",
                    { className: "scanner_button", onClick: function onClick() {
                            return _this9.handleClick(_this9.props.method);
                        } },
                    this.props.method
                ),
                React.createElement(
                    "p",
                    { className: "scanner_output" },
                    this.state.output
                )
            );
        }
    }]);

    return MethodsButton;
}(React.Component);
// class MethodsButtonOutput

ReactDOM.render(React.createElement(ScannerApp, null), rootElement);