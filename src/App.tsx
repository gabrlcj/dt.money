import { useState } from 'react'
import { TransactionsProvider } from './hooks/useTransactions'
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { TransactionsTable } from "./components/TransactionsTable"
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />

      <TransactionsTable />
    </TransactionsProvider>
  )
}
