const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
var PROTO_PATH = __dirname + '/../../protos/service.proto';


const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// The protoDescriptor object has the full package hierarchy

const identityService = protoDescriptor.grpcIdentity;

const client = new identityService.Identity('localhost:3005', grpc.credentials.createInsecure());

module.exports = {
    async registerUser({ username, email, password, type}) {
        const user = {
            Username: username,
            Email: email,
            Password: password,
            Type: type
        }
        
        return new Promise((resolve,reject) => {
            client.RegisterUserIdentity(user, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    },
    async login({ username, email, password }) {
        const user = {
            Username: username,
            Email: email,
            Password: password,
        }

        return new Promise((resolve, reject) => {
            client.EnquireUserIdentity(user, (err, res) => {
                if(err) reject(err);
                resolve(res);
            })
        });
    },
    validateUnsafeUserPayload(payload) {
      const user = { username, email, password, type } = payload;
      return [
          !(username && email && password && type),
          user
      ];
    },
    validateLoginPayload(payload) {
        const user = { username, email, password } = payload;
        return [
            !((username && password) || (email && password)),
            user
        ]
    }
}