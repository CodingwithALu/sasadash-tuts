export default interface DataSocketService {
  connect: () => Promise<any>
  disconnect: () => void
  subscribeOnChat: (goID: number) => Promise<void>
  doChat: (goID: number, content: string) => Promise<void>
  isConnected: () => any
  startPing: () => void
}
