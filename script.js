/* ══════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    cats: {Groceries:'Groceries',Transport:'Transport',Home:'Home',Fun:'Fun',Other:'Other'},
    catKeys: ['Groceries','Transport','Home','Fun','Other'],
    used: 'USED', spent: 'Spent', remaining: 'Remaining',
    projection: 'End-of-month projection',
    catChart: 'Expenses by category', lastExpenses: 'Latest expenses',
    noExpenses: 'No expenses yet', noData: 'No data',
    shoppingList: 'Shopping list', noShopping: 'No items in your list',
    shopDescPlaceholder: 'e.g. New shoes…', addItem: 'Add item',
    addTitle: ['New ','Expense'],
    amount: 'Amount', category: 'Category', description: 'Description',
    descPlaceholder: 'e.g. Birthday gift…',
    recurring: 'Recurring expense', recurringSub: 'Repeats every month',
    addBtn: 'Add Expense',
    historyTitle: ['Histo','ry'],
    allCats: 'All categories', noExpensesHist: 'No expenses',
    statsTitle: ['Statis','tics'],
    catDist: 'Category distribution', monthlyTrend: 'Monthly trend', insufficientData: 'Insufficient data',
    settingsTitle: ['Sett','ings'],
    language: 'Language',
    monthlyBudget: 'Monthly budget', budgetSaved: 'Budget saved', saveBudget: 'Save',
    warnThreshold: 'Orange warning threshold', warnSub: 'Alert when you exceed this % of budget',
    recurringExpenses: 'Recurring expenses', noRecurring: 'No recurring expenses',
    tutorialTitle: '📲 Add to Home Screen',
    deleteSub: 'Delete all expenses and budgets from every month',
    deleteAll: 'Delete all data',
    navHome: 'Home', navHist: 'History', navStats: 'Stats', navSet: 'Settings',
    editExpense: 'Edit expense', editAmount: 'Amount', editDesc: 'Description',
    deleteBtn: 'Delete', saveBtn: 'Save',
    chipOk: 'Everything on track', chipWarn: 'You have used {pct}% of your budget',
    chipDanger: 'Running out of budget!', chipEmpty: 'Budget exhausted',
    confirmDeleteExp: 'Delete this expense?', confirmDeleteAll: 'Delete ALL data? This action is irreversible.',
    noExportData: 'No expenses to export',
    csvHeaders: 'Date,Category,Amount,Description,Recurring',
    csvYes: 'Yes', csvNo: 'No',
    recBadge: '↻ recurring',
    tutS1Title:'Open MoneyFlow in Safari',tutS1Desc:'Make sure you are using Safari. Chrome and other browsers do not support installation as an app on iPhone.',
    tutS2Title:'Tap the Share button',tutS2Desc:'At the bottom center you\'ll find the icon with an arrow pointing up. Tap it to open the share menu.',
    tutS3Title:'Scroll and tap "Add to Home Screen"',tutS3Desc:'In the menu that appears from the bottom, scroll to find this item with the "+" icon. Tap it.',
    tutS4Title:'Confirm with "Add"',tutS4Desc:'A preview will appear with the app name. Tap "Add" in the top right corner to complete the installation.',
    tutSafariTip:'On iOS, apps added via Safari run full screen without the browser bar, just like a native app.',
    tutC1Title:'Open MoneyFlow in Chrome',tutC1Desc:'On Android, use Chrome for the best experience. On iPhone, Safari is preferred, but Chrome works too.',
    tutC2Title:'Tap the three dots in the top right',tutC2Desc:'Chrome\'s main menu opens by tapping "⋮" in the top right corner.',
    tutC3Title:'Select "Add to Home Screen"',tutC3Desc:'In the dropdown menu, look for "Add to Home Screen" or "Install app". On Android a banner may also appear automatically.',
    tutC4Title:'Tap "Add" to confirm',tutC4Desc:'A confirmation popup will appear. Tap "Add" and the MoneyFlow icon will appear on your Home Screen.',
    tutChromeTip:'On Android with Chrome, the app is installed as a PWA and appears in your app list with its own icon and splash screen.',
    tapHere:'TAP HERE', svgMessages:'Messages', svgAddHome:'Add to Home Screen',
    svgCancel:'Cancel', svgAddToHome:'Add to Home', svgAdd:'Add',
    svgNewTab:'🔖  New tab', svgBookmarks:'⭐  Bookmarks', svgAddHome2:'📲  Add to Home', svgPrint:'🖨️  Print',
  },
  it: {
    months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
    cats: {Groceries:'Alimentari',Transport:'Trasporti',Home:'Casa',Fun:'Svago',Other:'Altro'},
    catKeys: ['Groceries','Transport','Home','Fun','Other'],
    used:'USATO',spent:'Speso',remaining:'Residuo',
    projection:'Proiezione fine mese',
    catChart:'Spese per categoria',lastExpenses:'Ultime spese',
    noExpenses:'Nessuna spesa ancora',noData:'Nessun dato',
    shoppingList:'Acquisti Futuri',noShopping:'Nessun articolo in lista',
    shopDescPlaceholder:'Es. Scarpe nuove…',addItem:'Aggiungi articolo',
    addTitle:['Nuova ','Spesa'],
    amount:'Importo',category:'Categoria',description:'Descrizione',
    descPlaceholder:'Es. Regalo compleanno…',
    recurring:'Spesa ricorrente',recurringSub:'Si ripete ogni mese',
    addBtn:'Aggiungi Spesa',
    historyTitle:['Crono','logia'],
    allCats:'Tutte le categorie',noExpensesHist:'Nessuna spesa',
    statsTitle:['Statisti','che'],
    catDist:'Distribuzione categorie',monthlyTrend:'Andamento mensile',insufficientData:'Dati insufficienti',
    settingsTitle:['Impo','stazioni'],
    language:'Lingua',
    monthlyBudget:'Budget mensile',budgetSaved:'Budget salvato',saveBudget:'Salva',
    warnThreshold:'Soglia avviso arancione',warnSub:'Avviso quando superi questa % del budget',
    recurringExpenses:'Spese ricorrenti',noRecurring:'Nessuna spesa ricorrente',
    tutorialTitle:'📲 Aggiungi alla schermata Home',
    deleteSub:'Cancella spese e budget di tutti i mesi',
    deleteAll:'Elimina tutto',
    navHome:'Home',navHist:'Storico',navStats:'Stats',navSet:'Set',
    editExpense:'Modifica spesa',editAmount:'Importo',editDesc:'Descrizione',
    deleteBtn:'Elimina',saveBtn:'Salva',
    chipOk:'Tutto sotto controllo',chipWarn:'Hai usato il {pct}% del budget',
    chipDanger:'Stai esaurendo il budget!',chipEmpty:'Budget esaurito',
    confirmDeleteExp:'Eliminare questa spesa?',confirmDeleteAll:'Eliminare TUTTI i dati? Questa azione è irreversibile.',
    noExportData:'Nessuna spesa da esportare',
    csvHeaders:'Data,Categoria,Importo,Descrizione,Ricorrente',
    csvYes:'Sì',csvNo:'No',
    recBadge:'↻ ricorrente',
    tutS1Title:'Apri MoneyFlow in Safari',tutS1Desc:'Assicurati di usare Safari. Chrome e altri browser non supportano l\'installazione come app su iPhone.',
    tutS2Title:'Tocca il pulsante Condividi',tutS2Desc:'In basso al centro trovi l\'icona con la freccia verso l\'alto. Toccala per aprire il menu di condivisione.',
    tutS3Title:'Scorri e tocca "Aggiungi a schermata Home"',tutS3Desc:'Nel menu dal basso, scorri le opzioni per trovare questa voce con l\'icona "+". Toccala.',
    tutS4Title:'Conferma con "Aggiungi"',tutS4Desc:'Apparirà un\'anteprima con il nome dell\'app. Tocca "Aggiungi" in alto a destra per completare l\'installazione.',
    tutSafariTip:'Su iOS, le app aggiunte via Safari funzionano a schermo intero senza la barra di Safari, esattamente come un\'app nativa.',
    tutC1Title:'Apri MoneyFlow in Chrome',tutC1Desc:'Su Android usa Chrome per la migliore esperienza. Su iPhone preferisci Safari, ma Chrome funziona comunque.',
    tutC2Title:'Tocca i tre puntini in alto a destra',tutC2Desc:'Il menu principale di Chrome si apre toccando "⋮" nell\'angolo in alto a destra.',
    tutC3Title:'Seleziona "Aggiungi a schermata Home"',tutC3Desc:'Nel menu a tendina cerca "Aggiungi a schermata Home" o "Installa app". Su Android potrebbe apparire anche un banner automatico.',
    tutC4Title:'Tocca "Aggiungi" per confermare',tutC4Desc:'Apparirà un popup di conferma. Tocca "Aggiungi" e l\'icona di MoneyFlow apparirà nella schermata Home.',
    tutChromeTip:'Su Android con Chrome, l\'app viene installata come PWA e appare nella lista delle app con icona e splash screen.',
    tapHere:'TOCCA QUI',svgMessages:'Messaggi',svgAddHome:'Aggiungi a schermata Home',
    svgCancel:'Annulla',svgAddToHome:'Aggiungi a Home',svgAdd:'Aggiungi',
    svgNewTab:'🔖  Nuova scheda',svgBookmarks:'⭐  Aggiungi preferiti',svgAddHome2:'📲  Aggiungi a Home',svgPrint:'🖨️  Stampa',
  },
  es: {
    months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    cats:{Groceries:'Compras',Transport:'Transporte',Home:'Hogar',Fun:'Ocio',Other:'Otro'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'USADO',spent:'Gastado',remaining:'Restante',
    projection:'Proyección fin de mes',catChart:'Gastos por categoría',lastExpenses:'Últimos gastos',
    noExpenses:'Sin gastos aún',noData:'Sin datos',addTitle:['Nuevo ','Gasto'],
    shoppingList:'Lista de compras',noShopping:'Sin artículos en la lista',
    shopDescPlaceholder:'Ej. Zapatos nuevos…',addItem:'Añadir artículo',
    amount:'Importe',category:'Categoría',description:'Descripción',descPlaceholder:'Ej. Regalo cumpleaños…',
    recurring:'Gasto recurrente',recurringSub:'Se repite cada mes',addBtn:'Añadir Gasto',
    historyTitle:['Histo','rial'],allCats:'Todas las categorías',noExpensesHist:'Sin gastos',
    statsTitle:['Estadís','ticas'],catDist:'Distribución por categoría',monthlyTrend:'Tendencia mensual',insufficientData:'Datos insuficientes',
    settingsTitle:['Ajus','tes'],language:'Idioma',
    monthlyBudget:'Presupuesto mensual',budgetSaved:'Presupuesto guardado',saveBudget:'Guardar',
    warnThreshold:'Umbral de aviso naranja',warnSub:'Aviso cuando superes este % del presupuesto',
    recurringExpenses:'Gastos recurrentes',noRecurring:'Sin gastos recurrentes',
    tutorialTitle:'📲 Añadir a pantalla de inicio',deleteSub:'Eliminar todos los gastos y presupuestos',deleteAll:'Eliminar todo',
    navHome:'Inicio',navHist:'Historial',navStats:'Stats',navSet:'Ajustes',
    editExpense:'Editar gasto',editAmount:'Importe',editDesc:'Descripción',deleteBtn:'Eliminar',saveBtn:'Guardar',
    chipOk:'Todo bajo control',chipWarn:'Has usado el {pct}% del presupuesto',chipDanger:'¡Casi sin presupuesto!',chipEmpty:'Presupuesto agotado',
    confirmDeleteExp:'¿Eliminar este gasto?',confirmDeleteAll:'¿Eliminar TODOS los datos? Esta acción es irreversible.',
    noExportData:'Sin gastos para exportar',csvHeaders:'Fecha,Categoría,Importe,Descripción,Recurrente',csvYes:'Sí',csvNo:'No',recBadge:'↻ recurrente',
    tutS1Title:'Abre MoneyFlow en Safari',tutS1Desc:'Asegúrate de usar Safari. Chrome y otros navegadores no soportan la instalación como app en iPhone.',
    tutS2Title:'Toca el botón Compartir',tutS2Desc:'En la parte inferior central encontrarás el icono con una flecha hacia arriba. Tócalo para abrir el menú.',
    tutS3Title:'Desplázate y toca "Añadir a inicio"',tutS3Desc:'En el menú que aparece desde abajo, desplázate para encontrar esta opción con el icono "+". Tócala.',
    tutS4Title:'Confirma con "Añadir"',tutS4Desc:'Aparecerá una vista previa con el nombre de la app. Toca "Añadir" arriba a la derecha para completar la instalación.',
    tutSafariTip:'En iOS, las apps añadidas con Safari funcionan a pantalla completa sin la barra del navegador.',
    tutC1Title:'Abre MoneyFlow en Chrome',tutC1Desc:'En Android usa Chrome. En iPhone es mejor Safari, pero Chrome también funciona.',
    tutC2Title:'Toca los tres puntos arriba a la derecha',tutC2Desc:'El menú principal de Chrome se abre tocando "⋮" en la esquina superior derecha.',
    tutC3Title:'Selecciona "Añadir a pantalla de inicio"',tutC3Desc:'Busca "Añadir a pantalla de inicio" o "Instalar app". En Android también puede aparecer un banner automático.',
    tutC4Title:'Toca "Añadir" para confirmar',tutC4Desc:'Aparecerá un popup de confirmación. Toca "Añadir" y el icono de MoneyFlow aparecerá en tu pantalla de inicio.',
    tutChromeTip:'En Android con Chrome, la app se instala como PWA y aparece en la lista de apps con su propio icono.',
    tapHere:'TOCA AQUÍ',svgMessages:'Mensajes',svgAddHome:'Añadir a inicio',svgCancel:'Cancelar',svgAddToHome:'Añadir a Inicio',svgAdd:'Añadir',
    svgNewTab:'🔖  Nueva pestaña',svgBookmarks:'⭐  Favoritos',svgAddHome2:'📲  Añadir a Inicio',svgPrint:'🖨️  Imprimir',
  },
  fr: {
    months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    cats:{Groceries:'Courses',Transport:'Transport',Home:'Maison',Fun:'Loisirs',Other:'Autre'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'UTILISÉ',spent:'Dépensé',remaining:'Restant',
    projection:'Projection fin de mois',catChart:'Dépenses par catégorie',lastExpenses:'Dernières dépenses',
    noExpenses:'Aucune dépense',noData:'Aucune donnée',addTitle:['Nouvelle ','Dépense'],
    shoppingList:'Liste de courses',noShopping:'Aucun article dans la liste',
    shopDescPlaceholder:'Ex. Nouvelles chaussures…',addItem:'Ajouter un article',
    amount:'Montant',category:'Catégorie',description:'Description',descPlaceholder:'Ex. Cadeau anniversaire…',
    recurring:'Dépense récurrente',recurringSub:'Se répète chaque mois',addBtn:'Ajouter la dépense',
    historyTitle:['Histo','rique'],allCats:'Toutes les catégories',noExpensesHist:'Aucune dépense',
    statsTitle:['Statis','tiques'],catDist:'Répartition par catégorie',monthlyTrend:'Tendance mensuelle',insufficientData:'Données insuffisantes',
    settingsTitle:['Para','mètres'],language:'Langue',
    monthlyBudget:'Budget mensuel',budgetSaved:'Budget enregistré',saveBudget:'Enregistrer',
    warnThreshold:'Seuil d\'alerte orange',warnSub:'Alerte quand vous dépassez ce % du budget',
    recurringExpenses:'Dépenses récurrentes',noRecurring:'Aucune dépense récurrente',
    tutorialTitle:'📲 Ajouter à l\'écran d\'accueil',deleteSub:'Supprimer toutes les dépenses et budgets',deleteAll:'Tout supprimer',
    navHome:'Accueil',navHist:'Historique',navStats:'Stats',navSet:'Réglages',
    editExpense:'Modifier la dépense',editAmount:'Montant',editDesc:'Description',deleteBtn:'Supprimer',saveBtn:'Enregistrer',
    chipOk:'Tout sous contrôle',chipWarn:'Vous avez utilisé {pct}% du budget',chipDanger:'Budget presque épuisé !',chipEmpty:'Budget épuisé',
    confirmDeleteExp:'Supprimer cette dépense ?',confirmDeleteAll:'Supprimer TOUTES les données ? Cette action est irréversible.',
    noExportData:'Aucune dépense à exporter',csvHeaders:'Date,Catégorie,Montant,Description,Récurrent',csvYes:'Oui',csvNo:'Non',recBadge:'↻ récurrent',
    tutS1Title:'Ouvrez MoneyFlow dans Safari',tutS1Desc:'Assurez-vous d\'utiliser Safari. Chrome et autres navigateurs ne supportent pas l\'installation comme app sur iPhone.',
    tutS2Title:'Appuyez sur le bouton Partager',tutS2Desc:'En bas au centre, trouvez l\'icône avec une flèche vers le haut. Appuyez dessus.',
    tutS3Title:'Faites défiler et appuyez sur "Sur l\'écran d\'accueil"',tutS3Desc:'Dans le menu qui apparaît, faites défiler pour trouver cette option avec l\'icône "+". Appuyez dessus.',
    tutS4Title:'Confirmez avec "Ajouter"',tutS4Desc:'Un aperçu apparaîtra. Appuyez sur "Ajouter" en haut à droite pour terminer l\'installation.',
    tutSafariTip:'Sur iOS, les apps ajoutées via Safari fonctionnent en plein écran sans la barre du navigateur.',
    tutC1Title:'Ouvrez MoneyFlow dans Chrome',tutC1Desc:'Sur Android, utilisez Chrome. Sur iPhone, Safari est préférable, mais Chrome fonctionne aussi.',
    tutC2Title:'Appuyez sur les trois points en haut à droite',tutC2Desc:'Le menu Chrome s\'ouvre en appuyant sur "⋮" en haut à droite.',
    tutC3Title:'Sélectionnez "Ajouter à l\'écran d\'accueil"',tutC3Desc:'Cherchez "Ajouter à l\'écran d\'accueil" ou "Installer l\'app".',
    tutC4Title:'Appuyez sur "Ajouter" pour confirmer',tutC4Desc:'Une popup de confirmation apparaîtra. Appuyez sur "Ajouter" pour terminer.',
    tutChromeTip:'Sur Android avec Chrome, l\'app est installée comme PWA avec sa propre icône.',
    tapHere:'APPUYEZ ICI',svgMessages:'Messages',svgAddHome:'Sur l\'écran d\'accueil',svgCancel:'Annuler',svgAddToHome:'Ajouter à l\'accueil',svgAdd:'Ajouter',
    svgNewTab:'🔖  Nouvel onglet',svgBookmarks:'⭐  Favoris',svgAddHome2:'📲  Ajouter à l\'accueil',svgPrint:'🖨️  Imprimer',
  },
  de: {
    months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    cats:{Groceries:'Lebensmittel',Transport:'Transport',Home:'Zuhause',Fun:'Freizeit',Other:'Sonstiges'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'GENUTZT',spent:'Ausgegeben',remaining:'Verbleibend',
    projection:'Prognose Monatsende',catChart:'Ausgaben nach Kategorie',lastExpenses:'Letzte Ausgaben',
    noExpenses:'Noch keine Ausgaben',noData:'Keine Daten',addTitle:['Neue ','Ausgabe'],
    shoppingList:'Einkaufsliste',noShopping:'Keine Artikel in der Liste',
    shopDescPlaceholder:'z.B. Neue Schuhe…',addItem:'Artikel hinzufügen',
    amount:'Betrag',category:'Kategorie',description:'Beschreibung',descPlaceholder:'z.B. Geburtstagsgeschenk…',
    recurring:'Wiederkehrende Ausgabe',recurringSub:'Wiederholt sich jeden Monat',addBtn:'Ausgabe hinzufügen',
    historyTitle:['Verla','uf'],allCats:'Alle Kategorien',noExpensesHist:'Keine Ausgaben',
    statsTitle:['Statis','tiken'],catDist:'Kategorieverteilung',monthlyTrend:'Monatlicher Verlauf',insufficientData:'Unzureichende Daten',
    settingsTitle:['Einstel','lungen'],language:'Sprache',
    monthlyBudget:'Monatsbudget',budgetSaved:'Budget gespeichert',saveBudget:'Speichern',
    warnThreshold:'Orange Warnschwelle',warnSub:'Warnung wenn Sie diesen % des Budgets überschreiten',
    recurringExpenses:'Wiederkehrende Ausgaben',noRecurring:'Keine wiederkehrenden Ausgaben',
    tutorialTitle:'📲 Zum Startbildschirm hinzufügen',deleteSub:'Alle Ausgaben und Budgets löschen',deleteAll:'Alles löschen',
    navHome:'Start',navHist:'Verlauf',navStats:'Stats',navSet:'Einst.',
    editExpense:'Ausgabe bearbeiten',editAmount:'Betrag',editDesc:'Beschreibung',deleteBtn:'Löschen',saveBtn:'Speichern',
    chipOk:'Alles im Rahmen',chipWarn:'Sie haben {pct}% des Budgets verwendet',chipDanger:'Budget fast aufgebraucht!',chipEmpty:'Budget aufgebraucht',
    confirmDeleteExp:'Diese Ausgabe löschen?',confirmDeleteAll:'ALLE Daten löschen? Diese Aktion ist unwiderruflich.',
    noExportData:'Keine Ausgaben zum Exportieren',csvHeaders:'Datum,Kategorie,Betrag,Beschreibung,Wiederkehrend',csvYes:'Ja',csvNo:'Nein',recBadge:'↻ wiederkehrend',
    tutS1Title:'Öffne MoneyFlow in Safari',tutS1Desc:'Stelle sicher, dass du Safari verwendest. Chrome und andere Browser unterstützen keine App-Installation auf dem iPhone.',
    tutS2Title:'Tippe auf den Teilen-Button',tutS2Desc:'Unten in der Mitte findest du das Symbol mit einem Pfeil nach oben. Tippe darauf.',
    tutS3Title:'Scrolle zu "Zum Home-Bildschirm"',tutS3Desc:'Scrolle im Menü nach unten, um diese Option mit dem "+" Symbol zu finden.',
    tutS4Title:'Bestätige mit "Hinzufügen"',tutS4Desc:'Eine Vorschau erscheint. Tippe oben rechts auf "Hinzufügen".',
    tutSafariTip:'Auf iOS laufen Apps, die über Safari hinzugefügt wurden, vollbildschirmig ohne Browserleiste.',
    tutC1Title:'Öffne MoneyFlow in Chrome',tutC1Desc:'Auf Android verwende Chrome. Auf iPhone ist Safari bevorzugt, aber Chrome funktioniert auch.',
    tutC2Title:'Tippe auf die drei Punkte oben rechts',tutC2Desc:'Das Chrome-Menü öffnet sich durch Tippen auf "⋮" oben rechts.',
    tutC3Title:'Wähle "Zum Startbildschirm hinzufügen"',tutC3Desc:'Suche nach "Zum Startbildschirm" oder "App installieren".',
    tutC4Title:'Tippe auf "Hinzufügen" zum Bestätigen',tutC4Desc:'Ein Bestätigungs-Popup erscheint. Tippe auf "Hinzufügen".',
    tutChromeTip:'Auf Android mit Chrome wird die App als PWA mit eigenem Symbol installiert.',
    tapHere:'HIER TIPPEN',svgMessages:'Nachrichten',svgAddHome:'Zum Startbildschirm',svgCancel:'Abbrechen',svgAddToHome:'Zum Start hinzufügen',svgAdd:'Hinzufügen',
    svgNewTab:'🔖  Neuer Tab',svgBookmarks:'⭐  Lesezeichen',svgAddHome2:'📲  Zum Start',svgPrint:'🖨️  Drucken',
  },
  pt: {
    months:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    cats:{Groceries:'Compras',Transport:'Transporte',Home:'Casa',Fun:'Lazer',Other:'Outro'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'USADO',spent:'Gasto',remaining:'Restante',
    projection:'Projeção fim do mês',catChart:'Gastos por categoria',lastExpenses:'Últimos gastos',
    noExpenses:'Nenhum gasto ainda',noData:'Sem dados',addTitle:['Novo ','Gasto'],
    shoppingList:'Lista de compras',noShopping:'Nenhum item na lista',
    shopDescPlaceholder:'Ex. Sapatos novos…',addItem:'Adicionar item',
    amount:'Valor',category:'Categoria',description:'Descrição',descPlaceholder:'Ex. Presente aniversário…',
    recurring:'Gasto recorrente',recurringSub:'Repete-se todo mês',addBtn:'Adicionar Gasto',
    historyTitle:['Histó','rico'],allCats:'Todas as categorias',noExpensesHist:'Sem gastos',
    statsTitle:['Estatís','ticas'],catDist:'Distribuição por categoria',monthlyTrend:'Tendência mensal',insufficientData:'Dados insuficientes',
    settingsTitle:['Configu','rações'],language:'Idioma',
    monthlyBudget:'Orçamento mensal',budgetSaved:'Orçamento salvo',saveBudget:'Salvar',
    warnThreshold:'Limite de aviso laranja',warnSub:'Aviso quando ultrapassar esta % do orçamento',
    recurringExpenses:'Gastos recorrentes',noRecurring:'Nenhum gasto recorrente',
    tutorialTitle:'📲 Adicionar à tela inicial',deleteSub:'Excluir todos os gastos e orçamentos',deleteAll:'Excluir tudo',
    navHome:'Início',navHist:'Histórico',navStats:'Stats',navSet:'Config.',
    editExpense:'Editar gasto',editAmount:'Valor',editDesc:'Descrição',deleteBtn:'Excluir',saveBtn:'Salvar',
    chipOk:'Tudo sob controle',chipWarn:'Você usou {pct}% do orçamento',chipDanger:'Orçamento quase esgotado!',chipEmpty:'Orçamento esgotado',
    confirmDeleteExp:'Excluir este gasto?',confirmDeleteAll:'Excluir TODOS os dados? Esta ação é irreversível.',
    noExportData:'Nenhum gasto para exportar',csvHeaders:'Data,Categoria,Valor,Descrição,Recorrente',csvYes:'Sim',csvNo:'Não',recBadge:'↻ recorrente',
    tutS1Title:'Abra MoneyFlow no Safari',tutS1Desc:'Certifique-se de usar o Safari. O Chrome e outros navegadores não suportam instalação como app no iPhone.',
    tutS2Title:'Toque no botão Compartilhar',tutS2Desc:'Na parte inferior central você encontrará o ícone com uma seta para cima. Toque para abrir o menu.',
    tutS3Title:'Role e toque em "Adicionar à tela inicial"',tutS3Desc:'No menu que aparece, role as opções para encontrar este item com o ícone "+". Toque nele.',
    tutS4Title:'Confirme com "Adicionar"',tutS4Desc:'Uma prévia aparecerá com o nome do app. Toque em "Adicionar" no canto superior direito.',
    tutSafariTip:'No iOS, apps adicionados via Safari funcionam em tela cheia sem a barra do navegador.',
    tutC1Title:'Abra MoneyFlow no Chrome',tutC1Desc:'No Android, use o Chrome. No iPhone, o Safari é preferido, mas o Chrome também funciona.',
    tutC2Title:'Toque nos três pontos no canto superior direito',tutC2Desc:'O menu do Chrome se abre tocando em "⋮" no canto superior direito.',
    tutC3Title:'Selecione "Adicionar à tela inicial"',tutC3Desc:'Procure por "Adicionar à tela inicial" ou "Instalar app".',
    tutC4Title:'Toque em "Adicionar" para confirmar',tutC4Desc:'Um popup de confirmação aparecerá. Toque em "Adicionar".',
    tutChromeTip:'No Android com Chrome, o app é instalado como PWA com seu próprio ícone.',
    tapHere:'TOQUE AQUI',svgMessages:'Mensagens',svgAddHome:'Adicionar à tela inicial',svgCancel:'Cancelar',svgAddToHome:'Adicionar ao início',svgAdd:'Adicionar',
    svgNewTab:'🔖  Nova aba',svgBookmarks:'⭐  Favoritos',svgAddHome2:'📲  Adicionar ao início',svgPrint:'🖨️  Imprimir',
  }
};

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';
let T = TRANSLATIONS[currentLang];

const catIcons={Groceries:'🛒',Transport:'🚌',Home:'🏠',Fun:'🎮',Other:'📦'};
const catClass={Groceries:'cat-food',Transport:'cat-transport',Home:'cat-house',Fun:'cat-fun',Other:'cat-other'};
const catColors={Groceries:'#FF9F0A',Transport:'#5AC8FA',Home:'#30D158',Fun:'#BF5AF2',Other:'rgba(255,255,255,.6)'};

function curKey(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)}
let currentFilter='all';
let selectedCat='Groceries';
let editingDate=null;
let viewingKey=curKey();
let selectedShopCat='Groceries';

/* ══════════════════════════════════════
   LANGUAGE
══════════════════════════════════════ */
function setLang(lang, el){
  currentLang=lang;
  T=TRANSLATIONS[lang];
  localStorage.setItem('lang',lang);
  document.querySelectorAll('.lang-btn').forEach(x=>x.classList.remove('active'));
  if(el) el.classList.add('active');
  document.documentElement.lang=lang;
  applyLang();
  load();
  renderSettings();
}

function applyLang(){
  // static labels
  const s=(id,txt)=>{const el=document.getElementById(id);if(el)el.textContent=txt};
  const h=(id,html)=>{const el=document.getElementById(id);if(el)el.innerHTML=html};
  // ring
  s('lbl-used',T.used); s('lbl-spent',T.spent); s('lbl-remaining',T.remaining);
  s('lbl-projection',T.projection);
  s('lbl-last-expenses',T.lastExpenses);
  s('lbl-shopping-list',T.shoppingList); s('lbl-add-item',T.addItem);
  document.getElementById('shopDesc').placeholder=T.shopDescPlaceholder;
  // add
  h('lbl-add-title',T.addTitle[0]+'<span>'+T.addTitle[1]+'</span>');
  s('lbl-amount',T.amount); s('lbl-category',T.category); s('lbl-description',T.description);
  document.getElementById('desc').placeholder=T.descPlaceholder;
  s('lbl-recurring',T.recurring); s('lbl-recurring-sub',T.recurringSub);
  s('btn-add-expense',T.addBtn);
  // cat buttons
  document.querySelectorAll('.cat-btn').forEach(btn=>{
    const cat=btn.dataset.cat;
    const lbl=btn.querySelector('.cat-lbl');
    if(lbl&&T.cats[cat]) lbl.textContent=T.cats[cat];
  });
  // history
  h('lbl-history-title',T.historyTitle[0]+'<span>'+T.historyTitle[1]+'</span>');
  // stats
  h('lbl-stats-title',T.statsTitle[0]+'<span>'+T.statsTitle[1]+'</span>');
  s('lbl-cat-dist',T.catDist); s('lbl-monthly-trend',T.monthlyTrend);
  // settings
  h('lbl-settings-title',T.settingsTitle[0]+'<span>'+T.settingsTitle[1]+'</span>');
  s('lbl-language',T.language);
  s('lbl-monthly-budget',T.monthlyBudget); s('lbl-budget-saved',T.budgetSaved); s('btn-save-budget',T.saveBudget);
  s('lbl-warn-threshold',T.warnThreshold); s('lbl-warn-sub',T.warnSub);
  s('lbl-recurring-expenses',T.recurringExpenses);
  s('lbl-tutorial-title',T.tutorialTitle);
  s('lbl-delete-sub',T.deleteSub);
  h('btn-delete-all','<i class="fas fa-trash-can"></i> '+T.deleteAll);
  // nav
  s('nav-lbl-home',T.navHome); s('nav-lbl-hist',T.navHist);
  s('nav-lbl-stats',T.navStats); s('nav-lbl-set',T.navSet);
  // sheet
  s('lbl-edit-expense',T.editExpense); s('lbl-edit-amount',T.editAmount); s('lbl-edit-desc',T.editDesc);
  s('lbl-delete',T.deleteBtn); s('lbl-save',T.saveBtn);
  // tutorial text
  s('tut-s1-title',T.tutS1Title); s('tut-s1-desc',T.tutS1Desc);
  s('tut-s2-title',T.tutS2Title); s('tut-s2-desc',T.tutS2Desc);
  s('tut-s3-title',T.tutS3Title); s('tut-s3-desc',T.tutS3Desc);
  s('tut-s4-title',T.tutS4Title); s('tut-s4-desc',T.tutS4Desc);
  s('tut-safari-tip',T.tutSafariTip);
  s('tut-c1-title',T.tutC1Title); s('tut-c1-desc',T.tutC1Desc);
  s('tut-c2-title',T.tutC2Title); s('tut-c2-desc',T.tutC2Desc);
  s('tut-c3-title',T.tutC3Title); s('tut-c3-desc',T.tutC3Desc);
  s('tut-c4-title',T.tutC4Title); s('tut-c4-desc',T.tutC4Desc);
  s('tut-chrome-tip',T.tutChromeTip);
  // SVG inline texts
  s('svg-tap-here-1',T.tapHere); s('svg-tap-here-2',T.tapHere);
  s('svg-messages',T.svgMessages); s('svg-add-home',T.svgAddHome);
  s('svg-cancel-1',T.svgCancel); s('svg-add-to-home',T.svgAddToHome); s('svg-add-btn-1',T.svgAdd);
  s('svg-new-tab',T.svgNewTab); s('svg-bookmarks',T.svgBookmarks);
  s('svg-add-home-2',T.svgAddHome2); s('svg-print',T.svgPrint);
  s('svg-cancel-2',T.svgCancel); s('svg-add-btn-2',T.svgAdd);
  // filter chips
  buildFilterChips();
}

function buildFilterChips(){
  const fc=document.getElementById('filterChips');
  if(!fc) return;
  fc.innerHTML=`<div class="filter-chip active" data-cat="all" onclick="filterExp(this)">${T.allCats}</div>`
    +T.catKeys.map(k=>`<div class="filter-chip" data-cat="${k}" onclick="filterExp(this)">${catIcons[k]} ${T.cats[k]}</div>`).join('');
}

/* ══════════════════════════════════════
   STORAGE
══════════════════════════════════════ */
function getExp(key){return JSON.parse(localStorage.getItem('e_'+(key||curKey()))||'[]')}
function saveExp(e,key){localStorage.setItem('e_'+(key||curKey()),JSON.stringify(e))}
function getBudget(key){return +localStorage.getItem('b_'+(key||curKey()))||0}
function getThreshold(){return +localStorage.getItem('warnThreshold')||70}
function fmtMoney(n){return '€\u00a0'+n.toFixed(2).replace('.',',')}
function allKeys(){
  const keys=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('e_'))keys.push(k.replace('e_',''));}
  return keys.sort();
}

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
function show(id,navId){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  if(navId)document.getElementById(navId).classList.add('active');
  if(id==='historyPage'){viewingKey=curKey();buildMonthTabs();renderHistory();}
  if(id==='statsPage')renderStats();
  if(id==='settingsPage')renderSettings();
}

function selectCat(el){
  document.querySelectorAll('.cat-btn').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');selectedCat=el.dataset.cat;
  const wrap=document.getElementById('descWrap');
  if(selectedCat==='Other'){wrap.classList.add('open');}
  else{wrap.classList.remove('open');document.getElementById('desc').value='';}
}

function haptic(p){if(navigator.vibrate)navigator.vibrate(p||10)}
function showConfirm(){
  haptic([10,30,10]);
  const ov=document.getElementById('confirmOverlay'),bb=document.getElementById('confirmBubble');
  ov.style.display='flex';bb.style.animation='none';void bb.offsetWidth;
  bb.style.animation='pop-confirm .4s cubic-bezier(.4,0,.2,1) forwards';
  setTimeout(()=>ov.style.display='none',900);
}

/* ══════════════════════════════════════
   HOME
══════════════════════════════════════ */
function load(){
  const e=getExp(),b=getBudget(),t=e.reduce((a,x)=>a+x.amount,0);
  const residuo=b-t,pct=b?Math.min(100,t/b*100):0;
  const circ=2*Math.PI*68,arc=circ*pct/100,thr=getThreshold();
  document.getElementById('perc').textContent=pct.toFixed(0)+'%';
  document.getElementById('spent').textContent=fmtMoney(t);
  document.getElementById('remaining').textContent=fmtMoney(residuo);
  const ring=document.getElementById('ringArc');
  ring.setAttribute('stroke-dasharray',arc+' '+circ);
  ring.setAttribute('stroke',pct>=90?'#FF453A':pct>=thr?'#FF9F0A':'#30D158');
  const chip=document.getElementById('statusChip');
  if(!b){chip.innerHTML='';}
  else if(residuo<=0){chip.innerHTML=`<span class="chip danger"><i class="fas fa-ban"></i> ${T.chipEmpty}</span>`;}
  else if(pct>=90){chip.innerHTML=`<span class="chip danger"><i class="fas fa-circle-exclamation"></i> ${T.chipDanger}</span>`;}
  else if(pct>=thr){chip.innerHTML=`<span class="chip warn"><i class="fas fa-triangle-exclamation"></i> ${T.chipWarn.replace('{pct}',pct.toFixed(0))}</span>`;}
  else{chip.innerHTML=`<span class="chip ok"><i class="fas fa-circle-check"></i> ${T.chipOk}</span>`;}
  const now=new Date(),day=now.getDate(),dim=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();
  const pr=document.getElementById('projRow');
  if(b&&t>0&&day>1){
    const proj=t/day*dim;
    pr.style.display='flex';
    const pv=document.getElementById('projVal');
    pv.textContent=fmtMoney(proj);
    pv.style.color=proj>b?'#FF453A':proj>b*thr/100?'#FF9F0A':'#30D158';
  }else{pr.style.display='none';}
  renderShoppingList();
  const l3=document.getElementById('last3'),last=e.slice().reverse().slice(0,3);
  if(!last.length){l3.innerHTML=`<div class="empty">${T.noExpenses}</div>`;return;}
  l3.innerHTML=last.map(x=>txRow(x,false)).join('');
  if(b)document.getElementById('budget').value=b;
  applyRecurring();
}

/* ══════════════════════════════════════
   SHOPPING LIST
══════════════════════════════════════ */
function getShopping(){return JSON.parse(localStorage.getItem('shopping')||'[]')}
function saveShopping(list){localStorage.setItem('shopping',JSON.stringify(list))}

function selectShopCat(el){
  document.querySelectorAll('.shop-cat-btn').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');selectedShopCat=el.dataset.cat;
}

function addShoppingItem(){
  const desc=document.getElementById('shopDesc').value.trim();
  const price=parseFloat(document.getElementById('shopPrice').value);
  if(!desc||isNaN(price)||price<=0)return;
  const list=getShopping();
  list.push({id:Date.now(),desc,amount:price,cat:selectedShopCat});
  saveShopping(list);
  document.getElementById('shopDesc').value='';
  document.getElementById('shopPrice').value='';
  haptic(10);
  renderShoppingList();
}

function renderShoppingList(){
  const list=getShopping(),container=document.getElementById('shoppingList');
  if(!container)return;
  if(!list.length){container.innerHTML=`<div class="empty">${T.noShopping}</div>`;return;}
  container.innerHTML=list.map(item=>`
    <div class="shop-item" data-id="${item.id}">
      <div class="shop-checkbox" onclick="toggleShoppingItem(${item.id})"><i class="fas fa-check"></i></div>
      <div class="shop-info"><div class="shop-desc">${item.desc}</div><div class="shop-sub">${catIcons[item.cat]||'📦'} ${T.cats[item.cat]||item.cat}</div></div>
      <div class="shop-price">${fmtMoney(item.amount)}</div>
      <div class="shop-delete-btn" onclick="deleteShoppingItem(${item.id})"><i class="fas fa-xmark"></i></div>
    </div>`).join('');
}

function toggleShoppingItem(id){
  const list=getShopping(),idx=list.findIndex(x=>x.id===id);if(idx===-1)return;
  const item=list[idx];
  const e=getExp();
  e.push({amount:item.amount,cat:item.cat,date:Date.now(),desc:item.desc,recurring:false});
  saveExp(e);
  list.splice(idx,1);saveShopping(list);
  haptic([10,30,10]);showConfirm();
  load();
}

function deleteShoppingItem(id){
  const list=getShopping().filter(x=>x.id!==id);
  saveShopping(list);haptic(10);renderShoppingList();
}

function txRow(x,editable){
  const d=new Date(x.date);
  const ds=d.getDate().toString().padStart(2,'0')+'/'+(d.getMonth()+1).toString().padStart(2,'0');
  const sub=x.desc?x.desc:ds;
  const recBadge=x.recurring?`<span class="recurring-badge">${T.recBadge}</span>`:'';
  const editBtn=editable?`<div class="tx-edit-btn" onclick="openSheet(${x.date})"><i class="fas fa-pencil"></i></div>`:'';
  return `<div class="tx-row" data-date="${x.date}">
    <div class="tx-icon ${catClass[x.cat]||'cat-other'}">${catIcons[x.cat]||'📦'}</div>
    <div class="tx-info"><div class="tx-cat">${T.cats[x.cat]||x.cat}${recBadge}</div><div class="tx-sub">${sub}</div></div>
    <div class="tx-amount">${fmtMoney(x.amount)}</div>${editBtn}
  </div>`;
}

/* ══════════════════════════════════════
   HISTORY
══════════════════════════════════════ */
function buildMonthTabs(){
  const keys=allKeys();if(!keys.includes(curKey()))keys.push(curKey());
  keys.sort().reverse();
  document.getElementById('monthsTabs').innerHTML=keys.map(k=>{
    const [y,m]=k.split('-');
    return `<div class="month-tab${k===viewingKey?' active':''}" onclick="switchViewMonth('${k}',this)">${T.months[+m-1]} ${y}</div>`;
  }).join('');
}
function switchViewMonth(key,el){
  viewingKey=key;
  document.querySelectorAll('.month-tab').forEach(x=>x.classList.remove('active'));el.classList.add('active');
  currentFilter='all';
  document.querySelectorAll('.filter-chip').forEach(x=>x.classList.remove('active'));
  document.querySelector('.filter-chip[data-cat="all"]').classList.add('active');
  renderHistory();
}
function renderHistory(){
  const all=getExp(viewingKey),e=currentFilter==='all'?all:all.filter(x=>x.cat===currentFilter);
  const total=e.reduce((s,x)=>s+x.amount,0);
  document.getElementById('categoryTotal').textContent=fmtMoney(total);
  document.getElementById('categoryLabel').textContent=currentFilter==='all'?T.allCats:(T.cats[currentFilter]||currentFilter);
  const hl=document.getElementById('historyList');
  if(!e.length){hl.innerHTML=`<div class="empty">${T.noExpensesHist}</div>`;return;}
  hl.innerHTML=e.slice().reverse().map(x=>txRow(x,viewingKey===curKey())).join('');
}
function filterExp(el){
  document.querySelectorAll('.filter-chip').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');currentFilter=el.dataset.cat;renderHistory();
}

/* ══════════════════════════════════════
   ADD
══════════════════════════════════════ */
function addExpense(){
  const v=parseFloat(document.getElementById('amount').value);
  if(isNaN(v)||v<=0)return;
  const description=selectedCat==='Other'?document.getElementById('desc').value.trim():'';
  const isRec=document.getElementById('recurring').checked;
  const e=getExp();
  e.push({amount:v,cat:selectedCat,date:Date.now(),desc:description,recurring:isRec});
  saveExp(e);
  if(isRec){const recs=JSON.parse(localStorage.getItem('recurring')||'[]');recs.push({amount:v,cat:selectedCat,desc:description});localStorage.setItem('recurring',JSON.stringify(recs));}
  document.getElementById('amount').value='';document.getElementById('desc').value='';
  document.getElementById('recurring').checked=false;
  document.querySelectorAll('.cat-btn').forEach(x=>x.classList.remove('selected'));
  document.querySelector('.cat-btn[data-cat="Groceries"]').classList.add('selected');
  selectedCat='Groceries';document.getElementById('descWrap').classList.remove('open');
  showConfirm();show('home','nav-home');load();
}

function applyRecurring(){
  if(localStorage.getItem('rec_applied_'+curKey()))return;
  const recs=JSON.parse(localStorage.getItem('recurring')||'[]');if(!recs.length)return;
  const e=getExp();
  recs.forEach(r=>e.push({amount:r.amount,cat:r.cat,date:Date.now(),desc:r.desc||'',recurring:true}));
  saveExp(e);localStorage.setItem('rec_applied_'+curKey(),'1');
}

function saveBudget(){
  const v=parseFloat(document.getElementById('budget').value);
  if(!isNaN(v))localStorage.setItem('b_'+curKey(),v);
  haptic(10);load();
  const saved=document.getElementById('budgetSaved');
  if(saved){saved.style.display='block';setTimeout(()=>saved.style.display='none',2000);}
}

function resetData(){
  if(confirm(T.confirmDeleteExp)){localStorage.removeItem('e_'+curKey());localStorage.removeItem('rec_applied_'+curKey());load();}
}
function resetAll(){
  if(confirm(T.confirmDeleteAll)){localStorage.clear();location.reload();}
}

/* ══════════════════════════════════════
   STATS
══════════════════════════════════════ */
function renderStats(){
  const e=getExp(),totByCat={};
  e.forEach(x=>{totByCat[x.cat]=(totByCat[x.cat]||0)+x.amount});
  const total=Object.values(totByCat).reduce((a,b)=>a+b,0);
  const svg=document.getElementById('donutSvg'),legend=document.getElementById('donutLegend');
  if(!total){svg.innerHTML=`<text x="80" y="86" text-anchor="middle" fill="rgba(255,255,255,.3)" font-size="13">${T.noData}</text>`;legend.innerHTML='';return;}
  const r=58,cx=80,cy=80,circ=2*Math.PI*r;let offset=0,paths='',legendHTML='';
  Object.entries(totByCat).sort((a,b)=>b[1]-a[1]).forEach(([cat,val])=>{
    const pct=val/total,dash=pct*circ,color=catColors[cat]||'#fff';
    paths+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="24" stroke-dasharray="${dash} ${circ-dash}" stroke-dashoffset="${-offset+circ/4}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset+=dash;
    legendHTML+=`<div class="legend-item"><div class="legend-dot" style="background:${color}"></div><div class="legend-info"><div class="legend-name">${catIcons[cat]} ${T.cats[cat]||cat}</div><div class="legend-pct">${(pct*100).toFixed(1)}%</div></div><div class="legend-amount">${fmtMoney(val)}</div></div>`;
  });
  svg.innerHTML=paths+`<text x="80" y="84" text-anchor="middle" fill="white" font-size="13" font-weight="600">${fmtMoney(total)}</text>`;
  legend.innerHTML=legendHTML;
  const keys=allKeys(),mb=document.getElementById('monthlyBars');
  if(!keys.length){mb.innerHTML=`<div class="empty">${T.insufficientData}</div>`;return;}
  const monthData=keys.slice(-6).map(k=>{
    const exp=getExp(k),t=exp.reduce((a,x)=>a+x.amount,0),[y,m]=k.split('-');
    return{label:T.months[+m-1].slice(0,3),total:t};
  });
  const maxM=Math.max(...monthData.map(x=>x.total),1);
  mb.innerHTML=monthData.map(m=>`<div class="bar-row"><div class="bar-cat" style="font-size:11px">${m.label}</div><div class="bar-track"><div class="bar-fill" style="width:${(m.total/maxM*100).toFixed(1)}%;background:var(--accent)"></div></div><div class="bar-val">${fmtMoney(m.total)}</div></div>`).join('');
}

/* ══════════════════════════════════════
   SETTINGS
══════════════════════════════════════ */
function renderSettings(){
  const thr=getThreshold();
  document.getElementById('thresholdSlider').value=thr;
  document.getElementById('thresholdDisplay').textContent=thr+'%';
  const b=getBudget();if(b)document.getElementById('budget').value=b;
  // highlight current lang
  document.querySelectorAll('.lang-btn').forEach(x=>{
    x.classList.toggle('active',x.dataset.lang===currentLang);
  });
  const recs=JSON.parse(localStorage.getItem('recurring')||'[]');
  const rl=document.getElementById('recurringList');
  if(!recs.length){rl.innerHTML=`<div class="empty">${T.noRecurring}</div>`;}
  else{rl.innerHTML=recs.map((r,i)=>`
    <div class="tx-row">
      <div class="tx-icon ${catClass[r.cat]||'cat-other'}">${catIcons[r.cat]||'📦'}</div>
      <div class="tx-info"><div class="tx-cat">${T.cats[r.cat]||r.cat}</div><div class="tx-sub">${r.desc||T.recBadge}</div></div>
      <div class="tx-amount">${fmtMoney(r.amount)}</div>
      <div class="tx-edit-btn" style="background:rgba(255,69,58,.15);border-color:rgba(255,69,58,.3);color:#FF453A" onclick="deleteRecurring(${i})"><i class="fas fa-xmark"></i></div>
    </div>`).join('');}
  setTimeout(()=>animateTutSteps('tut-safari-steps'),100);
}

function updateThreshold(v){localStorage.setItem('warnThreshold',v);document.getElementById('thresholdDisplay').textContent=v+'%';load();}
function deleteRecurring(i){const recs=JSON.parse(localStorage.getItem('recurring')||'[]');recs.splice(i,1);localStorage.setItem('recurring',JSON.stringify(recs));renderSettings();}

/* ══════════════════════════════════════
   SHEET
══════════════════════════════════════ */
function openSheet(date){
  const e=getExp(viewingKey),item=e.find(x=>x.date===date);if(!item)return;
  editingDate=date;document.getElementById('editAmount').value=item.amount;
  const dg=document.getElementById('editDescGroup'),ed=document.getElementById('editDesc');
  if(item.cat==='Other'){dg.style.display='block';ed.value=item.desc||'';}else{dg.style.display='none';ed.value='';}
  document.getElementById('sheetOverlay').classList.add('open');document.getElementById('sheet').classList.add('open');haptic(8);
}
function closeSheet(){document.getElementById('sheetOverlay').classList.remove('open');document.getElementById('sheet').classList.remove('open');editingDate=null;}
function saveEdit(){
  const v=parseFloat(document.getElementById('editAmount').value);if(isNaN(v)||v<=0)return;
  const e=getExp(viewingKey),idx=e.findIndex(x=>x.date===editingDate);if(idx===-1)return;
  e[idx].amount=v;if(e[idx].cat==='Other')e[idx].desc=document.getElementById('editDesc').value.trim();
  saveExp(e,viewingKey);closeSheet();haptic(10);renderHistory();load();
}
function deleteExpense(){
  if(!confirm(T.confirmDeleteExp))return;
  saveExp(getExp(viewingKey).filter(x=>x.date!==editingDate),viewingKey);
  closeSheet();haptic([20,50,20]);renderHistory();load();
}

/* ══════════════════════════════════════
   EXPORT
══════════════════════════════════════ */
function exportCSV(){
  const keys=allKeys();if(!keys.length){alert(T.noExportData);return;}
  let csv=T.csvHeaders+'\n';
  keys.forEach(k=>{getExp(k).forEach(x=>{
    const d=new Date(x.date),ds=d.getDate().toString().padStart(2,'0')+'/'+(d.getMonth()+1).toString().padStart(2,'0')+'/'+d.getFullYear();
    csv+=`${ds},${T.cats[x.cat]||x.cat},${x.amount.toFixed(2)},"${x.desc||''}",${x.recurring?T.csvYes:T.csvNo}\n`;
  });});
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download='moneyflow_export.csv';a.click();URL.revokeObjectURL(url);haptic(15);
}

/* ══════════════════════════════════════
   TUTORIAL
══════════════════════════════════════ */
function switchTutTab(tab,el){
  document.querySelectorAll('.tut-tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.tut-panel').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');document.getElementById('tut-'+tab).classList.add('active');
  animateTutSteps('tut-'+tab+'-steps');
}
function animateTutSteps(id){
  const steps=document.querySelectorAll('#'+id+' .tut-step');
  steps.forEach(s=>s.classList.remove('visible'));
  steps.forEach((s,i)=>setTimeout(()=>s.classList.add('visible'),i*130));
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
applyLang();
load();
