FROM golang:alpine
WORKDIR /go/src/github.com/hr-curtissimo/out-the-door/api
COPY go.mod .
COPY go.sum .
COPY main.go .
RUN CGO_ENABLED=0 GOOS=linux go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=0 /go/src/github.com/hr-curtissimo/out-the-door/api/app .
CMD ["./app"]
